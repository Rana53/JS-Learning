var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var readStream = fs.createReadStream('index.html', 'utf8');
    readStream.pipe(res);
}).listen(8080);