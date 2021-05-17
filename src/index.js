const { allPass, range, map, compose, slice } = require("ramda");
const getText = require("./getText");

function log(line) {
  console.log(line);
  return line;
}

const getAndLog = compose(log, getText);
const fizzBuzz = compose(map(getAndLog), range);

(function () {
  const [start, end] = slice(2, 4, process.argv);
  fizzBuzz(Number.parseInt(start), Number.parseInt(end));
  console.log(
    JSON.stringify(fizzBuzz(Number.parseInt(start), Number.parseInt(end)))
  );
})();

module.exports = {
  getText,
  fizzBuzz,
};
