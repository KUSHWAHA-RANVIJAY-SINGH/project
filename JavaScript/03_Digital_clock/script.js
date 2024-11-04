const clock = document.querySelector('#clock');

const div=document.querySelector('div');
div.style.backgroundColor='black'

setInterval(() => {
let date =new Date();
clock.innerHTML =date.toLocaleTimeString();
}, 1000);