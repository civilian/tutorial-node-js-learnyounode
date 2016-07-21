var http = require('http');
var bl = require('bl');
var count = 0;
var content = [];

var printContent = function (){
    for(var i = 0; i < content.length; i++) {
        console.log(content[i]);
    }
}

var httpGet = function (indexOfUrl){ 
    http.get(process.argv[indexOfUrl + 2], function(res) {
        res.pipe(bl(function (err, data) {
            if (err) 
                return console.error(err);
            content[indexOfUrl] = data.toString();
            count++;
            if(count == 3){
                printContent();
            }

        }));
    });
}

for(var i = 0; i < 3; i++)
    httpGet(i);