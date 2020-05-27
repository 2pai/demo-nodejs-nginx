require('dotenv').config()
const http = require('http')
const port = process.env.PORT || 3001
const server = http.createServer((req,res) => {
    if(req.url == '/hello') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('Hello world')
    }else{
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end('OK')
    }
})

server.listen(port,() => {
    console.log(`this app is running on ${port}`)
})