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

// OPERATOR BUTTONS
divide.addEventListener('click', divButton)

function divButton() {
    numDisplay += '÷';
    display.innerHTML = numDisplay;
    add = '';
    curr += '÷';
}

multiply.addEventListener('click', multButton)

function multButton() {
    numDisplay += 'x';
    display.innerHTML = numDisplay;
    add = '';
    curr += 'x';
}

minus.addEventListener('click', subButton)

function subButton() {
    numDisplay += '-';
    display.innerHTML = numDisplay;
    add = '';
    curr += '-';
}

plus.addEventListener('click', addButton)

function addButton() {
    numDisplay += '+';
    display.innerHTML = numDisplay;
    add = '';
    curr += '+';
}

// CLEAR/WITHDRAW/BALANCE/DEPOSIT
clear.addEventListener('click', clearDisp);

function clearDisp() {
    numDisplay = calcMod.clearMemory();
    display.innerHTML = numDisplay;
}
deposit.addEventListener('click', makeDeposit);

function makeDeposit() {
    numDisplay = calcMod.saveMemory();
    display.innerHTML = numDisplay;
}

withdraw.addEventListener('click', withdrawBal)

function withdrawBal() {
    numDisplay = calcMod.clearMemory();
    display.innerHTML = numDisplay;
}
balance.addEventListener('click', showBal);

function showBal() {
    numDisplay = calcMod.recallMemory();
}