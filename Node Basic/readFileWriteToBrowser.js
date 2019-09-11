var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var readStream = fs.createReadStream('text.txt', 'utf8');
    readStream.pipe(res);
}).listen(8080);