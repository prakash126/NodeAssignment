var read_line = require('readline-sync');
var fs = require('fs');

//Input folder name
var input_data = read_line.question("Entre Folder to Name to create");

//create folder
fs.mkdir(input_data,(data)=>{console.log("Folder Created")})

//Remove Folder
fs.rmdir(input_data,(err,data)=>{
    if (err) throw err;
    console.log("Deleted Folder")
})
