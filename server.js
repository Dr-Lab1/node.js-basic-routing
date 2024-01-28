const connect = require('connect')
const http = require('http')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = connect()

app.use(bodyParser.urlencoded({
    extended : false
}))

app.use((req, res) => {
    res.end('Hello World !!')
})

http.createServer(app).listen(3000)

console.log('HERE WE GO !!')