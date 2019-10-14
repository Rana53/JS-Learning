var fs = require("fs");

fs.readFile("regular_file.txt",'utf-8', (err, data) => {
    if(err) throw err;
    compressData(data.toString());
});

function compressData(data){
    var inStr = data;
    console.log(inStr);
    var outStr = "";
    for(var i = 0; i < inStr.length; i += count){
        var ch = inStr[i];
        var count = 1;
        for(var j = i + 1; j < inStr.length; j++){
            if(ch !== inStr.charAt(j)) break;
            count++;
        }
        outStr += count.toString()+ch;
    }
    console.log(outStr);
}

fs.watchFile("encrypted_file.txt",outStr);
// var regSize = fs.
// var encSize = 