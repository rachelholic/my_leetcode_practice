const groupAnagrams = require('../problems/49-groupAnagrams');

const testCases = [
    { input: [["eat", "tea", "tan", "ate", "nat", "bat"]], expected: [["bat"],["nat","tan"],["ate","eat","tea"]] },
    { input: [[""]], expected: [[""]] },
    { input: [["a"]], expected: [["a"]] },
    { input: [["abc", "abc", "abc"]], expected: [["abc", "abc", "abc"]] },
    { input: [["abc", "def", "ghi"]], expected: [["abc"], ["def"], ["ghi"]] },
    { input: [["a", "A"]], expected: [["a"], ["A"]] },
];

describe('groupAnagrams', () => {
    testCases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
            const sortGroups = arr => arr.map(group => group.slice().sort()).sort((a, b) => a[0].localeCompare(b[0]));
            expect(sortGroups(groupAnagrams(...input))).toEqual(sortGroups(expected));
        });
    });
});