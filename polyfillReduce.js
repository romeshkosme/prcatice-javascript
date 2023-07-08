const numbers = [1, 2, 3, 4, 5, 6];

// Array.prototype.myReduceOne = function(cb, initialValue = null) {
//     let accumulator = initialValue;
//     for (const elem of this) {
//         accumulator = cb(accumulator, elem) // index, array
//     }
//     return accumulator;
// }
Array.prototype.myReduce = function (cb, initialValue = null) {
	const arr = this;
	let res = initialValue;
	for (const elem of arr) {
		res = cb(res, elem);
	}
	return res;
};

const result = numbers.myReduceOne((acc, curr) => {
	return acc + curr;
}, 0);

console.log(result);
