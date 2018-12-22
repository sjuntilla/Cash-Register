const calc = calculatorModule();
const getBalance = document.getElementsByClassName('balance');
const getNums = document.querySelectorAll('#number');
const getOps = document.querySelectorAll('#operator');
const display = document.querySelector('#display');
const clear = document.querySelector('.clear');

// need to get button input functional!!!

for (let i = 0; i < getNums.length; i++) {
    getNums[i].addEventListener('click', (e) => {
        calc.load(e.target.textContent);
        display.textContent = calc.getTotal();
    });
}

for (let i = 0; i < getNums.length; i++) {
    getOps[i].addEventListener('click', (e) => {
        calc.load(e.target.textContent);
        display.textContent = calc.getTotal();
    });

}

clear.addEventListener('click', () => {
    calc.clearDisplay();
    display.textContent = calc.getTotal();
});