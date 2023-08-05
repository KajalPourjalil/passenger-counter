
let count = -1;

let countEl = document.getElementById('count-el')


function increment() {
    count += 1;
    countEl.textContent = count;
}

increment();

let saveEl = document.getElementById('save-el');

function save() {
    let countstr = " " + count + " - ";
    saveEl.textContent += countstr;
    countEl.textContent = 0;
    count = 0;
}

save();

let welcomeEl = document.getElementById('welcome-el');

let greeting = 'Bem-vindo!';

function welcome() {
    welcomeEl.innerText = greeting;
    welcomeEl.innerHTML += "😁";
}

welcome();




// welcomeEl.innerText = greeting;

// welcomeEl.innerHTML += "❤️";

