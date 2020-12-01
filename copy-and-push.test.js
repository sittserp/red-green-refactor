const { copyAndPush } = require('./copy-and-push');


describe('copyAndPush', () => {
    it('returns returns a new array with all the items in the original array and a new item pushed to the end.', () => {
        const numbers = [1, 2, 3];

        copyAndPush(numbers, 4)

        expect(numbers)
            .toEqual([1, 2, 3, 4])
    })
})

/*
const numbers = [1, 2, 3];
copyAndPush(numbers, 4) // return [1, 2, 3, 4];
*/