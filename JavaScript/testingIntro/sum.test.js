

const sum = require('./sum');

// console.log(sum(1,2));

test("happt path of two numbers", () => {
    expect (sum(1,2)).toBe(3);

})

test("happt path of two numbers", () => {
    expect (sum(-1,-2)).toBe(-3);

})

