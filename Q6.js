var readline = require('readline-sync');
var fs = require("fs");
var data = readline.question("Enter Text To seaech")
read_data=""
var read_data =  read_data + fs.readFileSync('input.txt')

if(read_data.includes(data)){
    console.log("Found Data");
}
else{
    console.log("Not Found");
}
