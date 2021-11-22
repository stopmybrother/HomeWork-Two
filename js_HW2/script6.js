let number = 5;
const arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

let findCouple = (array, number) => {
    let obj = {};
    let result = [];

    for (x = 0; x < array.length; x++) {
        let element = array[x];
        obj[element] = true;
    };
    array = Object.keys(obj);

    let a = null;
    let b = null;
    array.forEach((x, value1) => {
        if (number - value1 < number) {
            a = number - value1;
            array.forEach((j, value2) => {
                if (a == value2 && j > x) {
                    b = value1;
                    result.push('Your pair of numbers: ' + b + ' + ' + a);
                };
            });
        };
    });
    
    return result;
};
findCouple(arr, number);