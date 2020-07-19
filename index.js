const { allPass, range, map, compose, forEach } = require("ramda");

function isBuzz(num) {
  return num % 3 === 0;
}

function isFizz(num) {
  return num % 5 === 0;
}

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

function log(line) {
  console.log(line);
  return line;
}

(function() {
  console.log("IIFE");
  const getAndLog = compose(log, getText);
  const [ start, end ] = process.argv.slice(2);
  console.log(process.argv.slice(2));
  map(getAndLog, range(Number.parseInt(start), Number.parseInt(end)));
  forEach(getAndLog, range(Number.parseInt(start), Number.parseInt(end)));
})();
