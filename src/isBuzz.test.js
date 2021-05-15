const isBuzz = require("./isBuzz");

describe('isBuzz works as expected', () => {
    it("returns true when given the number 3", () => {
        expect(isBuzz(3)).toBe(true);
    });

    it("returns false when given the number 1", () => {
        expect(isBuzz(1)).toBe(false);
    });
    
    it("returns true for all values in the array", () => {
        const buzzValues = [3,5,9];
        buzzValues.map(isBuzz).every((v) => expect(v).toBe(true));
    });
});
