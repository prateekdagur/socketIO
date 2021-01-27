const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

const chatAppDirectoryPath = path.join(__dirname, '/chatApp')
app.use(express.static(chatAppDirectoryPath))

let count = 0

io.on('connection', (socket) => {
    console.log('new webSocket connection')
    socket.emit('message', 'welcome!')
    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
    // socket.emit('checkUpdated', count)
    // socket.on('increment', () => {
    //     count++
    //     io.emit('checkUpdated', count)
    // })
})
server.listen(port, () => {
    console.log(`server is up on port ${port}`)
})