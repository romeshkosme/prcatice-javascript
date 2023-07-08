const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterArr1 = arr.filter((elem) => elem % 2 === 0);

console.log(filterArr1);

// Array.prototype.myFilter = function (cb) {
//   const resArr = [];
//   const arrObj = this;
//   for (let i = 0; i < arrObj.length; i++) {
//     if (cb(arrObj[i])) resArr.push(arrObj[i]);
//   }
//   return resArr;
// };

Array.prototype.myFilter = function (cb) {
  const filterArr = [];
  const arr = this;
  for (const elem of arr) {
    if (cb(elem)) filterArr.push(elem)
  }
  return filterArr
}

const filterArr2 = arr.myFilter((elem) => elem % 3 === 0);

console.log(filterArr2);
