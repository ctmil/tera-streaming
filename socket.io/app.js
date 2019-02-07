var http = require('http');
var path = require('path');
var express = require('express');
var app = express();



app.use(express.static(path.join(__dirname, 'public/dist')));

app.get('*', function(req, res, next) {
  res.sendFile(__dirname+"/public/dist/index.html");
});

var grupos = {
   "grupoX": {},
   "grupo1": {},
   "grupo2": {},
   "grupo3": {},
   "grupo4": {},
   "grupo5": {},
   "grupo6": {},
   "grupo7": {},
   "grupo8": {},
   "grupo9": {}
,};
var usuarios = [];

var server = http.createServer(app);
var io = require('socket.io')(server);

var grupoactual = 'grupoX';

io.on('connection', function (socket) {
    console.log("One user is connected: ",socket.client.conn.id);
    console.log("Clients:",socket.server.engine.clientsCount);

    for( client in socket.server.engine.clients ) {
      console.log(client);
    }

    //

//    socket.emit('setid', { 
//    
//    });

    //socket.emit('message', { msg: 'escena1' });

    //socket.emit('message', { msg: 'Welcome bro!' });

    socket.on('message',function(msg){

      console.log("message rec",msg);

      socket.emit('message', { msg: "Thx you sent ("+socket.client.conn.id+"): "+msg });
      socket.broadcast.emit('message', { msg: "Mr. "+socket.client.conn.id+" sent:" + msg });

    });

    socket.on('setid',function(msg) {
        if (msg=="ok") {
          console.log("setid was ok");
        }
    });

    socket.on('getid', function(iden ) {
	if ( iden == "singrupo" || grupoactual=="grupoX" ) {
		console.log('Cliente sin grupo: asignando');

        var iden = {
 			grupo: grupoactual,
			ip: socket.request.connection.remoteAddress,
			id: socket.client.conn.id
                      };

		socket.emit('setid', { msg: iden
		 } );

         grupos[ iden.grupo ][iden.id] = socket;

	} else {
		console.log('Cliente ya identificado', iden );
		var idenOb = iden;
        console.log(typeof iden);
        if (typeof iden == "string") {
			idenOb = JSON.parse(iden);
		}
        console.log('grupo',idenOb.grupo, idenOb.id );

        var grupo = grupos[idenOb.grupo];
        if (grupo) {
            console.log("Grupo existe!", grupo);
            var user = grupo[idenOb.id];
            if (user) {
              console.log("Found in group!", user.id);
              grupo[idenOb.id] = socket;

            } else {
               grupo[idenOb.id] = socket;
               console.log("Setting socket in group!", idenOb.id);
            }
         } else {
            console.log("Not found! Updating socket for this id");
            /*
           var iden = {
 			grupo: grupo,
			ip: socket.request.connection.remoteAddress,
			id: socket.client.conn.id
                      };

		    socket.emit('setid', { msg: iden
		     } );
             grupos[ idenOb.grupo ][idenOb.id] = socket;*/
            grupos[ idenOb.grupo ][idenOb.id] = socket;
         }
    }

    });

    socket.emit('getid', {} );

    socket.on('changegroup', function(newgroup) {
    	grupoactual = newgroup;
    });

    socket.on('launch', function( msg ) {
    	console.log( "launch", msg );

    } );

    socket.on('launch', function( msg ) {
    	console.log( "launch", msg );
        //var launch = JSON.parse(msg);
        console.log(msg.msg.grupo,msg.msg.escena);
        for( var user in grupos[msg.msg.grupo] ) {
          var sid = grupos[msg.msg.grupo][user];
          sid.emit("escena", { msg: msg.msg.escena } );
        }
    } );

    //

    socket.on('disconnect',function(){
      console.log("Disconnected ",socket.client.conn.id );
      console.log("Clients:",socket.server.engine.clientsCount);
    });
});



server.listen(8988);
