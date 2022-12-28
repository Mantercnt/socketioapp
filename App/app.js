const socket = io('ws://localhost:8000');

const user = prompt("Enter your Name");

socket.on('msg', (data)=>{

    let txt = document.createElement('li');
    txt.innerText = data; 
    document.getElementById('feed').appendChild(txt);

})

document.getElementById('send').addEventListener('click', ()=>{
    let data = document.getElementById('message').value;
    if (data){
        document.getElementById('message').value = '';
        socket.emit('msg', `${user}: ${data}`);
    }
    
})