const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, [8, 9], 10],
  [11, 12],
];

// console.log([].concat(...numbers))

function customFlat(arr) {
  const RESULT = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      RESULT.push(...customFlat(elem));
    } else {
      RESULT.push(elem);
    }
  });
  return RESULT;
}

console.log(customFlat(numbers));
