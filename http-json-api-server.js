var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res){
    if(req.method != 'GET')
        return res.end('Send me a GET\n');

    parsedUrl = url.parse(req.url, true);
    ansObj = {};
    var date = new Date(parsedUrl.query.iso);

    if(parsedUrl.pathname === '/api/parsetime'){
        ansObj = { "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };

    } else if (parsedUrl.pathname === '/api/unixtime') {
        ansObj = {"unixtime": date.getTime()};
    }

    ansString = JSON.stringify(ansObj);
    res.writeHead(200, { 'Content-Type':'application/json' });
    res.end(ansString);

});

server.listen(Number(process.argv[2]));