var fs = require('fs');
// var readstream = fs.createReadStream('input1.txt')
var read_data = fs.readFileSync('input.txt')

var write_data = fs.createWriteStream('input2.txt');
write_data.write(read_data);

write_data.on('finish',()=>{console.log("File created and writed")})
write_data.on('error',(err)=>{
    console.log(err);
})
