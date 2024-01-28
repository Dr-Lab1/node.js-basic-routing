var connect = require('connect')
var http = require('http')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = connect()

app.use(bodyParser.urlencoded({
    extended :false
}))

app.use((req, res) => {
    var url = (req.url == '/') ? '/index.html' : req.url
    var filename = __dirname + '/public' + url
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            res.end("Page Not Found")
        }
        else {
            res.end(data)
        }
    })
    

    // res.end("Hello World !")
})

http.createServer(app).listen(3000)

console.log("HERE WE GO !!!")