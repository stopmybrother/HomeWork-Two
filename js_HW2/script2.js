const str = 'Every hunter wants to know where the pheasant is sitting.';

const arr = Array.prototype.filter.call(str, (_item, index, array) => {
    if (index === 0) {
        return true;
    } else {
        return array[index - 1] === ' ';
    };
});

console.log(arr);