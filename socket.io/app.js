var http = require('http');
var path = require('path');
var express = require('express');
var app = express();



app.use(express.static(path.join(__dirname, 'public/dist')));

app.get('*', function(req, res, next) {
  res.sendFile(__dirname+"/public/dist/index.html");
});


var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log("One user is connected: ",socket.client.conn.id);
    console.log("Clients:",socket.server.engine.clientsCount);

    for( client in socket.server.engine.clients ) {
      console.log(client);
    }

    socket.emit('message', { msg: 'Welcome bro!' });

    socket.on('message',function(msg){

      console.log("message rec",msg);

      socket.emit('message', { msg: "Thx you sent ("+socket.client.conn.id+"): "+msg });
      socket.broadcast.emit('message', { msg: "Mr. "+socket.client.conn.id+" sent:" + msg });

    })


    socket.on('disconnect',function(){
      console.log("Disconnected ",socket.client.conn.id );
      console.log("Clients:",socket.server.engine.clientsCount);
    });
});

server.listen(8988);