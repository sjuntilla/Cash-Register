  function calculatorModule() {
      var memory = 0;
      var total = 0;
      var clear = '';

      var load = function (x) {
          total = x;
          return total;
      }

      var add = function (x, y) {
          total = x + y;
          return total;
      }

      var subtract = function (x, y) {
          total = x - y;
          return total;
      }

      var multiply = function (x, y) {
          total = x * y;
          return total;
      }

      var divide = function (x, y) {
          total = x / y;
          return total;
      }

      var recallMemory = function () {
          return memory;
      }

      var saveMemory = function () {
          memory += total;
          return clear;

      }

      var clearMemory = function (num) {
          memory -= total;
          return memory;
      }

      return {
          load: load,
          add: add,
          subtract: subtract,
          multiply: multiply,
          divide: divide,
          recallMemory: recallMemory,
          saveMemory: saveMemory,
          clearMemory: clearMemory
      };


  }