var fs = require("fs");

var processFile = function(data){
    console.log(data.split("\n").length - 1);
}
// People always use the function creating it inside the call
fs.readFile(process.argv[2], "utf8", function(err, data){
    if(err){
        throw err;
    }
    processFile(data);

});