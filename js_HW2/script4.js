let arrOne = [2, 3, 5, 7, 11, 13, 17];
let arrTwo = arrOne.reduce((previousValue, currentValue, index, array) => {
    return array[index] = previousValue + currentValue;
});

console.log('arrOne', arrOne); //change arrOne ?!
console.log('arrTwo', arrTwo);