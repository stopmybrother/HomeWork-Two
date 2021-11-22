let arrOne = [1, 2, 'a'];
let arrTwo = [1, 2, 3, 4, 'b'];

let arrayDiff = (arr1, arr2) => {
    let obj1 = {};
    let obj2 = {};
    let mass = [];
    let key;

    for (let x = 0; x < arr1.length; x++) {
        obj1[arr1[x]] = true;
    };

    for (let x = 0; x < arr2.length; x++) {
        obj2[arr2[x]] = true;
    };

    for (key in obj1) {
        if (!(key in obj2)) {
            mass.push(key);
        };
    };

    for (key in obj2) {
        if (!(key in obj1)) {
            mass.push(key);
        };
    };
    return mass;
};

arrayDiff(arrOne, arrTwo);