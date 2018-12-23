const calcMod = calculatorModule();
let numDisplay = '';
let add = '';
let curr = '';
let opEvent = '';

const display = document.querySelector('#display');
display.innerHTML = numDisplay;


// ZEROES + DECIMAL
zero.addEventListener('click', zeroOne);

function zeroOne() {
    numDisplay += '0';
    display.innerHTML = numDisplay;
    add += '0';
}

doubleoh.addEventListener('click', zeroTwo);

function zeroTwo() {
    numDisplay += '00';
    display.innerHTML = numDisplay;
    add += '00';
}
dot.addEventListener('click', dotDisp);

function dotDisp() {
    numDisplay += '.';
    display.innerHTML = numDisplay;
    add += '.';
}


// NUMBER BUTTONS

one.addEventListener('click', firstButton);

function firstButton() {
    numDisplay += '1';
    display.innerHTML = numDisplay;
    add += '1';
}

two.addEventListener('click', secondButton);

function secondButton() {
    numDisplay += '2';
    display.innerHTML = numDisplay;
    add += '2';
}

three.addEventListener('click', thirdButton);

function thirdButton() {
    numDisplay += '3';
    display.innerHTML = numDisplay;
    add += '3';
}

four.addEventListener('click', fourthButton);

function fourthButton() {
    numDisplay += '4';
    display.innerHTML = numDisplay;
    add += '4';
}

five.addEventListener('click', fifthButton);

function fifthButton() {
    numDisplay += '5';
    display.innerHTML = numDisplay;
    add += '5';
}

six.addEventListener('click', sixthButton);

function sixthButton() {
    numDisplay += '6';
    display.innerHTML = numDisplay;
    add += '6';
}

seven.addEventListener('click', seventhButton);

function seventhButton() {
    numDisplay += '7';
    display.innerHTML = numDisplay;
    add += '7';
}

eight.addEventListener('click', eighthButton);

function eighthButton() {
    numDisplay += '8';
    display.innerHTML = numDisplay;
    add += '8';
}

nine.addEventListener('click', ninthButton);

function ninthButton() {
    numDisplay += '9';
    display.innerHTML = numDisplay;
    add += '9';
}