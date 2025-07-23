const twoSum = require('../problems/1-twoSum');

const testCases = [
    { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { input: [[3, 2, 4], 6], expected: [1, 2] },
    { input: [[3, 3], 6], expected: [0, 1] },
];

testCases.forEach(({ input, expected }, index) => {
    test(`Test Case ${index + 1}`, () => {
        expect(twoSum(...input)).toEqual(expected);
    });
});

// npx jest test-cases/1-twoSum.test.js