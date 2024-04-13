import express from "express";
import mysql from "mysql";
import cors from 'cors';
import crypto from 'crypto';


// const express = require('express')
// const mysql = require('mysql')
// const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "admin",
    host: "wvuride-db1.c9w2o8komlq5.us-east-2.rds.amazonaws.com",
    password: "password",
    database: "metadata"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});

app.get("/", (req, res) => {
    res.json("Successfully connected to backend");
})

app.get("/users", (req, res) => {
    const q = "SELECT * FROM userInfo";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    })
})

app.post("/users", (req, res) => {
    const q = "INSERT INTO userInfo (`fullName`, `username`, `email`, `password`) VALUES (?)"
    var hash = crypto.createHash('sha256')
    var saltedPassword = req.body.password + 'carpool'
    hash.update(saltedPassword)
    var hashedPassword = hash.digest('hex')
    const values = [
        req.body.fullName,
        req.body.username,
        req.body.email,
        hashedPassword,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("User has been created")
    })
})

app.post("/login", (req, res) => {
    var hash = crypto.createHash('sha256')
    var saltedPassword = req.body.password + 'carpool'
    hash.update(saltedPassword)
    var hashedPassword = hash.digest('hex')
    console.log(hashedPassword)
    const q = `SELECT * FROM userInfo WHERE username = '${req.body.username}' AND password = '${hashedPassword}'`

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/login", (req, res) => {
    var hash = crypto.createHash('sha256')
    var saltedPassword = 'Dixie119' + 'carpool'
    hash.update(saltedPassword)
    var hashedPassword = hash.digest('hex')
    const q = `SELECT * FROM userInfo WHERE username = 'DizzyDigga1' AND password = '${hashedPassword}'`

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/token", (req, res) => {
    var hash = crypto.createHash('sha256')
    var preHash = req.body.username + 'This is a token'
    hash.update(preHash)
    var hashedToken = hash.digest('hex')
    return res.send(hashedToken)
})

app.post("/checkEmail", (req, res) => {
    const q = `SELECT * FROM userInfo WHERE email = '${req.body.email}'`

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/checkEmail", (req, res) => {
    const q = "SELECT * FROM userInfo WHERE email = 'nrg00007@mix.wvu.edu'"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/retrieve5Posts", (req, res) => {
    const q = "SELECT * FROM postsInfo LIMIT 5"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/postAPost", (req, res) => {
    const q = `INSERT INTO postsInfo (postAuth, postFrom, postTo, postDesc) VALUES (${req.body.username}, ${req.body.from}, ${req.body.to}, ${req.body.desc})`

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/postAPost", (req, res) => {
    const q = "INSERT INTO postsInfo (postAuth, postFrom, postTo, postDesc) VALUES ('DizzyDigga', 'West Run', 'The Foundry', 'If anyone would like to go to church on Sunday morning I would be more than willing to take some people so we can all save on gas')"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})



app.listen(8800, () => {
    console.log("Backend Connected to local port 8800")
})

// app.get('/sql', () => {

//     client.connect(function (err) {
//         if (err) {
//             console.log(err)
//             return
//         }

//         console.log('success')
//     })
//     client.end()
// })

// app.post("/register", (req, res) => {

//     db.query(
//         `INSERT INTO userInfo (username, password, email, fullName) VALUES (?, ?, ?, ?)`,
//         [req.body.username, req.body.password, req.body.email, req.body.fullName],
//         (err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send('Error registering user');
//             } else {
//                 console.log('User registered successfully');
//                 res.status(200).send('User registered successfully');
//             }
//         }
//     );

//     client.connect(function (err) {

//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log('success')

//         client.query(
//             `INSERT INTO userInfo (username, password, email, fullName) VALUES ( ${req.body.username}, ${req.body.password},  ${req.body.email}, ${req.body.fullName})`,
//             (err, result) => {
//                 console.log(err);
//                 console.log(result);
//             }
//         );
//     })
//     client.end()
//     res.status(200).send('successful')
// });


// app.post("/register", (req, res) => {

//     client.connect(function (err) {

//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log('success')

//         client.query(
//             `INSERT INTO userInfo (username, password, email, fullName) VALUES ( ${req.body.username}, ${req.body.password},  ${req.body.email}, ${req.body.fullName})`,
//             (err, result) => {
//                 console.log(err);
//                 console.log(result);
//             }
//         );
//     })
//     client.end()
//     res.status(200).send('successful')
// })

// app.post("/checkUsername", (req, res) => {

//     function get_info(data) {
//         db.connect(function (err) {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log('success')

//             db.query(
//                 `Select * FROM userInfo WHERE username=${data}`,
//                 (err, result) => {
//                     console.log(err)
//                     return result
//                 }
//             )
//         })
//     }

//     const result = get_info(req.body.username)
//     db.end()

//     res.send(result)

// })

// // This is where im confued on how to get the data base started on a server as opposed to locally
// app.listen(8800, () => {
//     console.log("Backend Connected to local port 8800")
// })
