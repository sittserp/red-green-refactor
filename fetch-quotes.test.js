const { fetchQuotes } = require('./fetch-quotes');

describe('fetchQuotes', () => {

    it('fetches a quote from Rick and Morty', async () => {

        const fetchedQuote = await fetchQuotes();

        expect(fetchedQuote)
            .toEqual({
                name: expect.any(String),
                text: expect.any(String),
                image: expect.any(String)
            })
    })

})
