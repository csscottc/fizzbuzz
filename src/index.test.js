const { isBuzz, isFizz } = require("./index");

describe("isBuzz returns true on number wholly divisible by 3",() => {
    it("returns true when given the number 3", () => {
        expect(isBuzz(3)).toBe(true);
    });
    it("returns false when given the number 1", () => {
        expect(isBuzz(1)).toBe(false);
    });
});

describe("isFizz returns true on number wholly divisible by 5",() => {
    it("returns true when given the number 5", () => {
        expect(isFizz(5)).toBe(true);
    });
    it("returns false when given the number 1", () => {
        expect(isFizz(1)).toBe(false);
    });
});