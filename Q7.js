var readline = require('readline-sync');
var fs = require("fs");

var data = readline.question("Enter Text To seaech")
read_data=""
var read_data =  read_data + fs.readFileSync('input.txt')

if(read_data.includes(data)){
    
    split_data = read_data.split("\n").join(",").split(" ").join(",").split(",");
    console.log(split_data)
    var count=0
    for (let ele of split_data){
        if(ele==data){
            count++;
        }
    }
    console.log("Number of count of words : ",count)
}
else{
    console.log("Not Found");
}
