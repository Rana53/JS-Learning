var fs = require('fs');
var readStream = fs.createReadStream('text.txt', 'utf8');
var writeStream = fs.createWriteStream('write_file.txt');
readStream.on('data', (chunk) => {
    console.log('----------');
    writeStream.write(chunk);
});
readStream.on('end', (chunk) => {
    console.log('read and write finished');
});