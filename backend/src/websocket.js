const socketio = require('socket.io')


exports.setupSocket = (server) =>{
    io = socketio(server)

    io.on("connection", function (server) {
        server.on("join", function(name){
          console.log("Joined: " + name);
          servers[server.id] = name;
          server.emit("update", "You have connected to the server.");
          server.broadcast.emit("update", name + " has joined the server.")
        });
      
        server.on("send", function(msg){
          console.log("Message: " + msg);
          server.broadcast.emit("chat", servers[server.id], msg);
        });
      
        server.on("disconnect", function(){
          console.log("Disconnect");
          io.emit("update", servers[server.id] + " has left the server.");
          delete servers[server.id];
        });
      });
}