const html = require('http')
    const fs = require('fs')
http.createServer((req, res) => {
    fs.createReadStream('./statisc/index.html')
})