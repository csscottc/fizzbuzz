const isFizz = require("./isFizz");

describe('isFizz', () => {
    it('returns true for all numbers in array',()=>{
        const fizzNumbers = [5,5,5];
        fizzNumbers.map(isFizz).every(v => expect(v).toBe(true)); 
    });

    it("returns true when given the number 5", () => {
        expect(isFizz(5)).toBe(true);
    });
    
    it("returns false when given the number 1", () => {
        expect(isFizz(1)).toBe(false);
    });
});

