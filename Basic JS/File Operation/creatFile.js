const fs = require('fs') 
  
// Data which will write in a file. 
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('Output.txt', "write file", (err) => { 
    console.log("Yes done\n");
    // In case of a error throw err. 
    if (err) throw err; 
});
 
