const { allPass, range, map, compose, slice } = require("ramda");

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

const getAndLog = compose(log, getText);
const program = compose(map(getAndLog), range);

(function() {
  const [start, end] = slice(2, 4, process.argv);
  program(Number.parseInt(start), Number.parseInt(end));
  console.log(JSON.stringify(program(Number.parseInt(start), Number.parseInt(end))));
})();

module.exports = {
  isFizz,
  isBuzz,
  program
};
