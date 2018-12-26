  function calculatorModule() {
      var memory = 0;
      var total = 0;
      var clear = '';

      var load = function (curr) {
          total = curr;
          return total;
      }

      var add = function (curr, add) {
          total = curr + add;
          return total;
      }

      var subtract = function (curr, add) {
          total = curr - add;
          return total;
      }

      var multiply = function (curr, add) {
          total = curr * add;
          return total;
      }

      var divide = function (curr, add) {
          total = curr / add;
          return total;
      }

      var recallMemory = function () {
          return memory;
      }

      var saveMemory = function () {
          memory += total;
          return clear;

      }

      var clearMemory = function () {
          return clear;
      }

      var withdrawMem = function () {
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
          clearMemory: clearMemory,
          withdrawMem: withdrawMem

      };


  }