const numbers = [1, 2, 3];

const copyAndPush = (arr, num) => {
    const newArr = [...arr, num]
    return newArr
}

module.exports = {
    copyAndPush
}