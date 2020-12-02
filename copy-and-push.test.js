const { copyAndPush } = require('./copy-and-push');


describe('copyAndPush', () => {

    const numbers = [1, 2, 3];

    it('returns returns a new array with all the items in the original array and a new item pushed to the end.', () => {

        const newArr = copyAndPush(numbers, 4)

        expect(newArr)
            .toEqual([1, 2, 3, 4])
    })
    it('checks that the original array remains the same', () => {
        expect(numbers)
            .toEqual([1, 2, 3])
    })
})

/*
const numbers = [1, 2, 3];
copyAndPush(numbers, 4) // return [1, 2, 3, 4];
*/