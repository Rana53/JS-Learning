var fs = require("fs");
var outStr = "";
fs.readFile("regular_file.txt",'utf-8', (err, data) => {
    if(err) throw err;
    compressData(data.toString());
});

function compressData(data){
    var inStr = data;
    console.log(inStr);
    for(var i = 0; i < inStr.length; i += count){
        var ch = inStr[i];
        var count = 1;
        for(var j = i + 1; j < inStr.length; j++){
            if(ch !== inStr.charAt(j)) break;
            count++;
        }
        if(0 <= ch && ch <= '9')
            outStr += count.toString()+ ','+ch;
        else
        outStr += count.toString()+ch;
    }
    console.log(outStr)
    fs.writeFile("encrypted_file.txt",outStr,(err) => {
        if(err) throw err;
    });
}

var stats = fs.statSync("regular_file.txt");
var regFileSize = stats["size"];


var stats = fs.statSync("encrypted_file.txt");
var encFileSize = stats["size"];

console.log("regular size " + regFileSize + " and  encripted size " + " " + encFileSize + ' (byte formate)');