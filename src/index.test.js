const isBuzz = require("./isBuzz");
const isFizz = require("./isFizz");
const { getText, program } = require("./index");



describe("The array of Buzz values all return the expected Buzz result.",() => {
    it("Works for this array", () => {
        const allBuzz = [3,3,3,3];
        allBuzz.map(getText).every((v) => expect(v).toBe('Buzz'));
    })
});


describe("program", () => {
    it("works", () => {
        console.log(JSON.stringify(program(1,10)));
        expect(JSON.stringify(program(1,10))).toBe(`["1","2","Buzz","4","Fizz","Buzz","7","8","Buzz"]`);
    })
});
