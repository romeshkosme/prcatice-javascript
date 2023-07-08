const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplicateArr1 = arr.map((item) => {
	return item * 2;
});
console.log(duplicateArr1);

// Array.prototype.myMap = function (cb) {
//   const resArr = [];
//   const arrObj = this;
//   for (let i = 0; i < arrObj.length; i++) {
//     resArr.push(cb(arrObj[i]));
//   }
//   return resArr;
// };

Array.prototype.myMap = function (cb) {
	const mapArr = [];
	const arr = this;
	for (const elem of arr) {
		mapArr.push(cb(elem));
	}
	return mapArr;
};

const duplicateArr2 = arr.myMap((elem) => elem * 3);

console.log(duplicateArr2);
