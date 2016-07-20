var fs = require("fs");
// Using 'utf8' returns directly a string not a buffer
var str = fs.readFileSync(process.argv[2], 'utf8');
console.log(str.split("\n").length - 1);