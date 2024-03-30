const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())

const db = mysql.createConnection({
    user: 'admin',
    host: 'wvuride-db1.c9w2o8komlq5.us-east-2.rds.amazonaws.com',
    password: 'password',
})

app.post("/register", (req, res) => {
    db.query(
        "INSERT INTO users (username, password, email, fullName, profilePic) VALUES (?,?,?,?,?)",
        [username, password, email, fullName, profilePic],
        (err, result) => {
            console.log(err);
        }
    );
})

//This is where im confued on how to get the data base started on a server as opposed to locally
app.listen(8800, () => {
    console.log("Backend Connected to local port 8800")
})
