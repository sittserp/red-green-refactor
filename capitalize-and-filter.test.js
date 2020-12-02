const { capitalizeAndFilter } = require('./capitalize-and-filter');


describe('capitalizeAndFilter', () => {

    const dogs = ['spot', 'rover', 'bingo', 'fred']

    it('takes an array of strings capitalize all strings and filter out any string that starts with the letter f.', () => {



        expect(capitalizeAndFilter(dogs))
            .toEqual(['SPOT', 'ROVER', 'BINGO'])
    })

})
