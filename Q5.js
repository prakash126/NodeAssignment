var fs = require('fs');
var input_data = ""
var readstream = fs.createReadStream('input.txt');

readstream.on('data',(data)=>{
    input_data=input_data+data;

})

readstream.on('end',()=>{
    console.log("Text File Length : ",input_data.length);
    console.log("Text Word Length : ",input_data.split(" ").length);
    console.log("Text Line Length : ",input_data.split(".").length);
})

readstream.on('error',(err)=>{
    console.log(err);
})