var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    console.log('request url is ' + req.url);
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plane' });
        fs.createReadStream('text.txt').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-type': 'application/jeson' });
        var jsonObj = {
            name: 'max',
            surname: 'tesar',
            age: 20
        };
        res.end(JSON.stringify(jsonObj));
    } else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream('404.html').pipe(res);
    }
}).listen(8000);