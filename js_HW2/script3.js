let arrOne = [0, 1, 2, 3, 4, 5, 6, 7];
const sumSeven = (array) => {
    let obj = {};
    let result = [];

    for (x = 0; x < array.length; x++) {
        let elementOne = array[x];

        for (let y = x + 1; y < array.length; y++) {
            let elementTwo = array[y];

            if (elementOne + elementTwo != 7) continue;

            let sum = elementOne + ':' + elementTwo;
            obj[sum] = sum;
        };
    };

    for (let key in obj) {
        result.push(obj[key]);
    };
    return result;
};

console.log(sumSeven(arrOne));