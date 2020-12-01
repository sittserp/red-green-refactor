const spot = { name: 'spot', age: 5, weight: '20 lbs' };

const getName = obj => {
    const { name } = obj
    return name
}

module.exports = {
    getName
}