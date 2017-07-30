const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('disconnect', function(){
    console.log('user disconnected')
  })
})

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
let second = 0
setInterval(() => {
  io.emit('random', second)
  second += 1
}, 100);

module.exports = app;

['./bootstrap', './app/routes', './app/exceptions/handler'].forEach(file => {
  require(file)(app)
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})
