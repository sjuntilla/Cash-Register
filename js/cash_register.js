const calcMod = calculatorModule();
let numDisplay = '';
let curr = '';
let add = '';
let opEvent = '';


const display = document.querySelector('#display');
display.innerHTML = numDisplay;


// ZEROES + DECIMAL
zero.addEventListener('click', zeroOne);

function zeroOne() {
    numDisplay += '0';
    display.innerHTML = numDisplay;
    curr += '0';
}

doubleoh.addEventListener('click', zeroTwo);

function zeroTwo() {
    numDisplay += '00';
    display.innerHTML = numDisplay;
    curr += '00';
}
dot.addEventListener('click', dotDisp);

function dotDisp() {
    numDisplay += '.';
    display.innerHTML = numDisplay;
    curr += '.';
}

// NUMBER BUTTONS

one.addEventListener('click', firstButton);

function firstButton() {
    numDisplay += '1';
    display.innerHTML = numDisplay;
    curr += '1';
}

two.addEventListener('click', secondButton);

function secondButton() {
    numDisplay += '2';
    display.innerHTML = numDisplay;
    curr += '2';
}

three.addEventListener('click', thirdButton);

function thirdButton() {
    numDisplay += '3';
    display.innerHTML = numDisplay;
    curr += '3';
}

four.addEventListener('click', fourthButton);

function fourthButton() {
    numDisplay += '4';
    display.innerHTML = numDisplay;
    curr += '4';
}

five.addEventListener('click', fifthButton);

function fifthButton() {
    numDisplay += '5';
    display.innerHTML = numDisplay;
    curr += '5';
}

six.addEventListener('click', sixthButton);

function sixthButton() {
    numDisplay += '6';
    display.innerHTML = numDisplay;
    curr += '6';
}

seven.addEventListener('click', seventhButton);

function seventhButton() {
    numDisplay += '7';
    display.innerHTML = numDisplay;
    curr += '7';
}

eight.addEventListener('click', eighthButton);

function eighthButton() {
    numDisplay += '8';
    display.innerHTML = numDisplay;
    curr += '8';
}

nine.addEventListener('click', ninthButton);

function ninthButton() {
    numDisplay += '9';
    display.innerHTML = numDisplay;
    curr += '9';
}

// OPERATOR BUTTONS
divide.addEventListener('click', divButton)

function divButton() {
    numDisplay += '÷';
    display.innerHTML = numDisplay;
    curr = '';
    add = numDisplay;
    opEvent = '÷';
}

multiply.addEventListener('click', multButton)

function multButton() {
    numDisplay += 'x';
    display.innerHTML = numDisplay;
    curr = '';
    add = numDisplay;
    opEvent = 'x';
}

minus.addEventListener('click', subButton)

function subButton() {
    numDisplay += '-';
    display.innerHTML = numDisplay;
    curr = '';
    add = numDisplay;
    opEvent = '-';
}

plus.addEventListener('click', addButton)

function addButton() {
    numDisplay += '+';
    display.innerHTML = numDisplay;
    curr = '';
    add = numDisplay;
    opEvent = '+';
}

// OPERATOR EXECUTION 
equal.addEventListener('click', equate);

function equate() {
    const first = parseInt(curr);
    const second = parseInt(add);
    if (opEvent === '+') {
        numDisplay = calcMod.add(second, first);
        display.innerHTML = numDisplay;
    } else if (opEvent === '-') {
        numDisplay = calcMod.subtract(second, first);
        display.innerHTML = numDisplay;
    } else if (opEvent === 'x') {
        numDisplay = calcMod.multiply(second, first);
        display.innerHTML = numDisplay;
    } else if (opEvent === '÷') {
        numDisplay = calcMod.divide(second, first);
        display.innerHTML = numDisplay;
    }
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
    numDisplay = calcMod.withdrawMem();
    display.innerHTML = calcMod.clearMemory();
}
balance.addEventListener('click', getBal);

function getBal() {
    numDisplay = calcMod.recallMemory();
    display.innerHTML = numDisplay;
}