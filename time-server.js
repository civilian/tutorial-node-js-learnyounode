var net = require('net');
var strftime = require('strftime');

var server = net.createServer ( function (socket) {
    var date = new Date();
    var ans = strftime("%Y-%m-%d %H:%M", date) + "\n";
    socket.end(ans);
});
server.listen(Number(process.argv[2]));