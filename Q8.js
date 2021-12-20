var fs = require('fs');
var data = "Inputed data"
var writestream = fs.createWriteStream('input1.txt');
writestream.write(data);

writestream.on('finish',()=>{
    console.log(data);
})
writestream.on('error',(err)=>{
    console.log(err);
})