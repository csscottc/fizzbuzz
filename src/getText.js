const { allPass } = require("ramda");
const isFizz = require("./isFizz");
const isBuzz = require("./isBuzz");
const isFizzBuzz = allPass([isBuzz, isFizz]);

function getText(num) {
  if (isFizzBuzz(num)) {
    return "FizzBuzz";
  }
  if (isBuzz(num)) {
    return "Buzz";
  }
  if (isFizz(num)) {
    return "Fizz";
  }
  return num.toString();
}

module.exports = getText;
