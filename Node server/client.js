// import {io} from 'socket.io'
const socket = io('http://localhost:3000');

const form = document.getElementById("send-container");
const msgInp = document.getElementById("msgInp");
const msgContLeft = document.querySelector(".msgContLeft");
const msgCont = document.querySelector(".msgCont");

const msgLDiv = (name)=>{
    let msgDiv = document.createElement('div')
    msgDiv.innerText = name;
    msgDiv.classList.add("msgNames")
    msgContLeft.append(msgDiv)
}

const append = (message, position) => {
    const msgElem = document.createElement('div');
    msgElem.innerText = message;
    msgElem.classList.add("message");
    msgElem.classList.add(`message-${position}`);
    msgCont.append(msgElem);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = msgInp.value;
    append(`You: ${message}`, 'right');
    socket.emit("send", message);
    msgInp.value = "";
})

const name = prompt("Enter Your Name");
socket.emit('new-user-joined', name);

socket.on('user-joined', name => {
    msgLDiv(`${name}`)
    append(`${name} joined the chat`, 'left')
})
socket.on('receive', data => {
    append(`${data.name}:${data.message}`, 'left')
})
socket.on('left', name => {
    append(`${name} left the chat`, 'left')
})