var os = require('os');
console.log("Home Directory : ",os.homedir())
console.log("Network Interface : ",JSON.stringify(os.networkInterfaces()))
console.log("OS Platform : ",os.platform())
console.log("Release of the OS : ",os.release())
console.log("Temporary directory : ",os.tmpdir())
console.log("Total Memory in bytes : ",os.totalmem())
console.log("the operating system name : ",os.type()) 
console.log("Total uptme of CPU in seconds : ",os.uptime())
