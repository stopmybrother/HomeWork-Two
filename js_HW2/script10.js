let arrOne = [5, 2, 1, -10, 8];
let arrTwo = [5, 2, 1, -9, 3, 7];

let union = (arr1, arr2) => {
    let arrThree = [];
    let arr = arr1.concat(arr2);
    let length = arr.length;
    let obj = {};

    while (length--) {
        let element = arr[length];
        if (!obj[element]) {
            arrThree.unshift(element);
            obj[element] = true;
        };
    };
    return arrThree;
};
union(arrOne, arrTwo);