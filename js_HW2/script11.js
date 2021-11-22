let arrOne = [1, [2, [3, [4]]]];
let arrTwo = [1, [2], [3, [[4]]], [5, 6]];

let expand = (array) => {
    let x = 0;
    while (x < array.length) {
        array = array.reduce((a, b) => {
            return a.concat(b);
        }, []);
        x++;
    };
    return array;
};