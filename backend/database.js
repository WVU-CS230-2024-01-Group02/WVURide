import express from "express";
import mysql from "mysql";
import cors from 'cors';


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
    db.query(q, (err, data)=>{
        if (err) return res.json(err)
        return res.json(data);
    })
})

app.post("/users", (req, res) => {
    const q = "INSERT INTO userInfo (`fullName`, `username`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.fullName,
        req.body.username,
        req.body.email,
        req.body.password,
    ];

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("User has been created") 
    })
})

app.post("/login", (req, res) => {
    const q = `SELECT * FROM userInfo WHERE username = '${req.body.username}'`

    db.query(q, (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/login", (req, res) => {
    const q = "SELECT * FROM userInfo WHERE username = 'DizzyDigga'"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/checkEmail", (req, res) => {
    const q = `SELECT * FROM userInfo WHERE email = '${req.body.email}'`

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/checkEmail", (req, res) => {
    const q = "SELECT * FROM userInfo WHERE email = 'nrg00007@mix.wvu.edu'"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
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
