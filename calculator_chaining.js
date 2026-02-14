function Calculator(number) {
  var value = number; // private variable (closure memory)

  var obj = {
    add: function (num) {
      value = value + num;
      return obj;
    },

    subtract: function (num) {
      value = value - num;
      return obj;
    },

    multiply: function (num) {
      value = value * num;
      return obj;
    },

    power: function (num) {
      value = Math.pow(value, num);
      return obj;
    },

    divide: function (num) {
      if (num === 0) {
        throw new Error("Division by zero is not allowed");
      }
      value = value / num;
      return obj;
    },

    reset: function () {
      value = n;
      return obj;
    },

    getResult: function () {
      return value;
    },
  };

  return obj;
}
var calc = Calculator(10);

console.log(
  calc
    .add(5) // 15
    .subtract(4) // 11
    .multiply(2) // 22
    .power(2) // 484
    .divide(4) // 121
    .getResult(),
);
