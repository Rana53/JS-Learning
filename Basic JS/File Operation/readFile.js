var fs = require("fs");
var outStr = "";
fs.readFile("regular_file.txt",'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});
