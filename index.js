
let count = 0;

let countEl = document.getElementById('count-el')

console.log(countEl);

function increment() {
    count += 1;
    countEl.textContent = count;
}

increment();

let saveEl = document.getElementById('save-el');

function save() {
    let countstr = " " + count + " - ";
    saveEl.textContent += countstr;
}

save();

let welcomeEl = document.getElementById('welcome-el');

let greeting = 'Ola ';

let fname = 'Kajal';


welcomeEl.innerText = greeting + fname;

welcomeEl.innerHTML += "❤️";


function zero() {
    sav
}