let hamburger = document.querySelector(".msgContainer .msgContLeft i ")

let open = false;
hamburger.addEventListener("click", function () {
    if (open == false) {
        document.querySelector(".msgContainer .msgContLeft").style.left = "0.4vw"
        open = true;
    } else {
        document.querySelector(".msgContainer .msgContLeft").style.left = "-41vw"
        open = false;
    }
})


const socket = io('http://localhost:3000');

const form = document.getElementById("send-container");
const msgInp = document.getElementById("msgInp");
const msgContLeft = document.querySelector(".msgContLeft");
const msgCont = document.querySelector(".msgCont");


const append = (message, position) => {
    const msgElem = document.createElement('div');
    msgElem.innerText = message;
    msgElem.classList.add("message");
    msgElem.classList.add(`message-${position}`);
    msgCont.append(msgElem);
}

let name;

do {
    name = prompt("Enter Your Name");
    socket.emit('new-user-joined', name);
} while (name === "");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = msgInp.value;
    append(`${name}: ${message}`, 'right');
    socket.emit("send", message);
    msgInp.value = "";
})

socket.on('user-joined', name => {
    if (name != "" && name != null) {
        const msgLDiv = (name) => {
            let msgDiv = document.createElement('div')
            msgDiv.innerText = name;
            msgDiv.classList.add("msgNames")
            msgContLeft.append(msgDiv)
        }
        msgLDiv(`${name}`)
        append(`${name} joined the chat`, 'left')
    }
})
socket.on('receive', data => {
    append(`${data.name}:${data.message}`, 'left')
})
socket.on('left', name => {
    if (name != null) {
        const msgLDiv = (name) => {
            let msgDiv = document.createElement('div')
            msgDiv.innerText = name;
            msgDiv.classList.add("msgNames")
            msgDiv.style.backgroundColor = "red"
            msgDiv.style.color = "white"
            msgContLeft.append(msgDiv)
        }
        msgLDiv(`${name} Left`)
        append(`${name}: left the chat`, 'left')
    }
})