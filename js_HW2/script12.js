let arr1 = ['php', 'php', 'css', 'css', 'script', 'script', 'html', 'html', 'java'];

let removeDuplicates = (array) => {
    let obj = {};
    let mass = [];

    for (let x = 0; x < array.length; x++) {
        let str = array[x];
        obj[str] = true;
    };
    for (x in obj) {
        mass.push(x);
    };
    return mass;
};
removeDuplicates(arr1);