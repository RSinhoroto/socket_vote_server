const chat = require('./socket.js')
const io = require('socket.io')(3030, {
  cors: {
    origin: "*"
  }
})

chat(io)

// io.on('connection', socket => {
//   console.log(socket.id)
// })