var os = require('os');
var fs= require('fs');

// Create Directory
fs.mkdir("Node",()=>{console.log("Folder Created")});

//Create Write Stream
var write_stream = fs.createWriteStream('Node/input.txt');
write_stream.write("");

//on finish Event
write_stream.on('finish',()=>{console.log("created")});

//om error Event
write_stream.on('error',(err)=>{console.log(err)})
console.log("File created")

//Deleting of file
fs.unlink('Node/input.txt',(err,data)=>{
    if (err) throw err;
    console.log("Folder Deleted")})
