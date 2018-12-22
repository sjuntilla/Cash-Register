    const buttonPress = document.getElementsByClassName('number');
    for (var i = 0; i < buttonPress.length; i++) {
        buttonPress[i].addEventListener('click', printResult);
    }

    function printResult() {

    }


    var calculatorModule = function () {
        var memory = 0;
        var total = 0;

        var load = function (num) {
            if (typeof num === 'number') {
                total = num;
                return num;
            } else {
                return null;
            }
        }
        var getTotal = function () {
            if (typeof total === 'number') {
                return total;
            }
        }

        var add = function (num) {
            if (typeof num === 'number') {
                return total += num;
            } else {
                throw error;
            }
        }

        var subtract = function (num) {
            if (typeof num === 'number') {
                return total -= num;
            } else {
                throw error;
            }
        }

        var multiply = function (num) {
            if (typeof num === 'number') {
                return total *= num;
            } else {
                throw error;
            }
        }

        var divide = function (num) {
            if (typeof num === 'number') {
                return total /= num;
            } else {
                throw error;
            }
        }

        var recallMemory = function () {
            return memory;
        }

        var saveMemory = function () {
            memory = total;

        }

        var clearMemory = function (num) {
            memory = 0;
        }

        return {
            load,
            getTotal,
            add,
            subtract,
            multiply,
            divide,
            recallMemory,
            saveMemory,
            clearMemory
        }


    }