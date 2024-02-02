// import {io} from 'socket.io'
const socket = io('http://localhost:3000');

const form = document.getElementById("send-container");
const msgInp = document.getElementById("msgInp");
const msgContainer = document.querySelector(".msgContainer");

const name = prompt("Enter Your Name");
socket.emit('new-user-joined', name)