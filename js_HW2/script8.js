const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

let obj = {};
let count;
let max = 0;
let str = '';

for (let x = 0; x < arr.length; x++) {
  if (!obj[arr[x]]) {
    
    for (let y = x; y < arr.length; y++) {
      if (arr[x] === arr[y]) {
        count++;
      };
    };

    if (count > max) {
      max = count;
      str = arr[x] + ' repeats ' + count + ' times.';
    };
    count = 0;
  };
  obj[arr[x]] = true;
};
console.log(str);