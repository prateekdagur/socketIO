const socket = io()
socket.on('message', (message) => {
    console.log(message)
})


// socket.on('checkUpdated', (count) => {
//     console.log('the count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('clicked')
//     socket.emit('increment')
// })
document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = document.querySelector('input').value

    socket.emit('sendMessage', message)
})