const server = require('http').createServer();

const io = require('socket.io')(server, {
    cors:{origin:'*'}
});

io.on('connection', (socket)=>{
    socket.on('msg', data =>{
        io.emit('msg', data);
    })
})

server.listen(8000, ()=>console.log('Listening to 8000'));