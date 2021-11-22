let generateNumbers = (startValue, length) => {
    let arr = new Array(length);
    for (let x = 0; x < length; x++, startValue++) {
        arr[x] = startValue;
    };
    return arr;
};
generateNumbers(0, 5);