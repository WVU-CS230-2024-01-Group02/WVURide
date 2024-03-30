const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())

const client = mysql.createConnection({
    user: 'admin',
    host: 'wvuride-db1.c9w2o8komlq5.us-east-2.rds.amazonaws.com',
    password: 'password',
})

app.get('/sql', () => {

    const db = client.connect(function (err) {
        if (err) {
            console.log(err)
            return
        }

        console.log('success')
    })
    client.end()
})

app.post("/register", (req, res) => {

    client.connect(function (err) {

        if (err) {
            console.log(err)
            return
        }
        console.log('success')

        client.query(
            `INSERT INTO userInfo (username, password, email, fullName) VALUES ( ${req.body.username}, ${req.body.password},  ${req.body.email}, ${req.body.fullName})`,
            (err, result) => {
                console.log(err);
            }
        );
    })
    client.end()
    res.status(200)
})

app.post("/checkUsername", (req, res) => {

    function get_info(data) {
        client.connect(function (err) {
            if (err) {
                console.log(err)
                return
            }
            console.log('success')

            client.query(
                `Select * FROM userInfo WHERE username=${data}`,
                (err, result) => {
                    console.log(err)
                    return result
                }
            )
        })
    }

    const result = get_info(req.body.username)
    client.end()

    res.send(result)

})

//This is where im confued on how to get the data base started on a server as opposed to locally
app.listen(8800, () => {
    console.log("Backend Connected to local port 8800")
})
