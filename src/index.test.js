const isBuzz = require("./isBuzz");
const isFizz = require("./isFizz");
const { getText, program } = require("./index");

describe("isBuzz returns true on number wholly divisible by 3",() => {
    it("returns true when given the number 3", () => {
        expect(isBuzz(3)).toBe(true);
    });
    it("returns false when given the number 1", () => {
        expect(isBuzz(1)).toBe(false);
    });
});


describe("The array of Buzz values all return the expected Buzz result.",() => {
    it("Works for this array", () => {
        const allBuzz = [3,3,3,3];
        allBuzz.map(getText).every((v) => expect(v).toBe('Buzz'));
    })
});

describe("isFizz returns true on number wholly divisible by 5",() => {
    it("returns true when given the number 5", () => {
        expect(isFizz(5)).toBe(true);
    });
    it("returns false when given the number 1", () => {
        expect(isFizz(1)).toBe(false);
    });
});

describe("program", () => {
    it("works", () => {
        console.log(JSON.stringify(program(1,10)));
        expect(JSON.stringify(program(1,10))).toBe(`["1","2","Buzz","4","Fizz","Buzz","7","8","Buzz"]`);
    })
});
