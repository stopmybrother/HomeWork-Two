const str = 'JavaScript';

const arr = Array.prototype.map.call(str, (_item, index) => {
    return str.substring(index - 1, index + 2);
}, 0);

console.log(arr);