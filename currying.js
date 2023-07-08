// function multiply(x, y) {
//   return x * y;
// }

// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(3));

function multiply(x) {
	return (y) => {
		console.log(x * y);
	};
}

const multipleByTwo = multiply(2)
multipleByTwo(3)