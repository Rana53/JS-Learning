var http = require("http");
// var serverFunc = function(req, res) {
//     res.end("Hello Clint i'm Server");
// }
http.createServer((req, res) => {
    res.end('Hello client');
    console.log(req);
}).listen(8081);