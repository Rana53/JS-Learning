var fs = require('fs');
var readData = fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err)
        return console.err(err);
    console.log(inti + ' ' + data);

});
fs.writeFile('textW.txt', readData, (err, data) => {
    if (err)
        return console.error(err);
    console.log(data);
});