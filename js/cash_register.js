const calcMod = calculatorModule(); // calls on calculator.js
let result = ''; // displays result at the top of the register
let curr = ''; // first value of any given equation
let add = ''; //second value of any given equation
let opEvent = ''; // denotes type of operator being called upon

const nums = document.querySelectorAll('.number');
const ops = document.querySelectorAll('.operator');
const display = document.querySelector('#display'); // display box
display.innerHTML = result; // ensures that the display box shows resulting number from user input

// FOR LOOP FOR BUTTON CLICKS!
for (var i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', numberClick);

    function numberClick(val) {
        const mVal = val.target.innerHTML;
        result += mVal;
        display.innerHTML = result;
        curr += mVal;
    }
}

// First attempt-- writing the same code over and over is gross
// ZEROES + DECIMAL
// zero.addEventListener('click', zeroOne);

// function zeroOne() {
//     result += '0';
//     display.innerHTML = result;
//     curr += '0';
// }

// doubleoh.addEventListener('click', zeroTwo);

// function zeroTwo() {
//     result += '00';
//     display.innerHTML = result;
//     curr += '00';
// }
// dot.addEventListener('click', dotDisp);

// function dotDisp() {
//     result += '.';
//     display.innerHTML = result;
//     curr += '.';
// }

// // NUMBER BUTTONS

// one.addEventListener('click', firstButton);

// function firstButton() {
//     result += '1';
//     display.innerHTML = result;
//     curr += '1';
// }

// two.addEventListener('click', secondButton);

// function secondButton() {
//     result += '2';
//     display.innerHTML = result;
//     curr += '2';
// }

// three.addEventListener('click', thirdButton);

// function thirdButton() {
//     result += '3';
//     display.innerHTML = result;
//     curr += '3';
// }

// four.addEventListener('click', fourthButton);

// function fourthButton() {
//     result += '4';
//     display.innerHTML = result;
//     curr += '4';
// }

// five.addEventListener('click', fifthButton);

// function fifthButton() {
//     result += '5';
//     display.innerHTML = result;
//     curr += '5';
// }

// six.addEventListener('click', sixthButton);

// function sixthButton() {
//     result += '6';
//     display.innerHTML = result;
//     curr += '6';
// }

// seven.addEventListener('click', seventhButton);

// function seventhButton() {
//     result += '7';
//     display.innerHTML = result;
//     curr += '7';
// }

// eight.addEventListener('click', eighthButton);

// function eighthButton() {
//     result += '8';
//     display.innerHTML = result;
//     curr += '8';
// }

// nine.addEventListener('click', ninthButton);

// function ninthButton() {
//     result += '9';
//     display.innerHTML = result;
//     curr += '9';
// }


// OPERATOR BUTTONS
divide.addEventListener('click', divButton)

function divButton() {
    result += '÷';
    display.innerHTML = result;
    curr = '';
    add = result;
    opEvent = '÷';
}

multiply.addEventListener('click', multButton)

function multButton() {
    result += 'x';
    display.innerHTML = result;
    curr = '';
    add = result;
    opEvent = 'x';
}

minus.addEventListener('click', subButton)

function subButton() {
    result += '-';
    display.innerHTML = result;
    curr = '';
    add = result;
    opEvent = '-';
}

plus.addEventListener('click', addButton)

function addButton() {
    result += '+';
    display.innerHTML = result;
    curr = '';
    add = result;
    opEvent = '+';
}

// OPERATOR EXECUTION 
equal.addEventListener('click', equate);

function equate() {
    const first = parseInt(curr);
    const second = parseInt(add);
    if (opEvent === '+') {
        result = calcMod.add(second, first);
        display.innerHTML = result;
    } else if (opEvent === '-') {
        result = calcMod.subtract(second, first);
        display.innerHTML = result;
    } else if (opEvent === 'x') {
        result = calcMod.multiply(second, first);
        display.innerHTML = result;
    } else if (opEvent === '÷') {
        result = calcMod.divide(second, first);
        display.innerHTML = result;
    } else if (opEvent === '=') {
        result = calcMod.equal(first);
        display.innerHTML = result;
    }

}

// CLEAR/WITHDRAW/BALANCE/DEPOSIT
clear.addEventListener('click', clearDisp);

function clearDisp() {
    result = calcMod.clearMemory();
    display.innerHTML = result;
}
deposit.addEventListener('click', makeDeposit);

function makeDeposit() {
    result = calcMod.saveMemory();
    display.innerHTML = result;
}

withdraw.addEventListener('click', withdrawBal)

function withdrawBal() {
    result = calcMod.withdrawMem();
    display.innerHTML = calcMod.recallMemory();
}
balance.addEventListener('click', getBal);

function getBal() {
    result = calcMod.recallMemory();
    display.innerHTML = result;
}