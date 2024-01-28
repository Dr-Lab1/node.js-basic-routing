const connect = require("connect");
const http = require('http')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = connect()

app.use(bodyParser.urlencoded({
    extended : false
}))

app.use ((req, res) => {
    const url = (req.url == "/") ? '/index.html' : req.url
    const filename = __dirname + '/public' + url
    fs.readFile(filename, 'utf-8', (err, data) => {
        if(err)
            res.end("Page Not Found")
        else
            res.end(data)
    })
})

http.createServer(app).listen(3000)

console.log("HERE WE GO !!")