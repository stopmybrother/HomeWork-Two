const arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];

let filterFalse = (array) => {
    return array.filter(t => {
        return !!t; //return true value
    });
};

filterFalse(arr);