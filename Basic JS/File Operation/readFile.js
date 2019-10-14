var fs = require('fs');
fs.readFile('input.txt', (err, data) => {
    if(err) throw err;
    console.log('file size is ' + data.toString().size);
}); 

