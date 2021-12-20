var fs = require('fs');
var input_data = ""
var readstream = fs.createReadStream('input.txt');

readstream.on('data',(data)=>{
    input_data=input_data+data;
})

readstream.on('end',()=>{
    console.log(input_data)
})

readstream.on('error',(err)=>{
    console.log(err);
})