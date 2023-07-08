function* generator() {
	let id = 0;

	while (true) {
		yield fetch("https://dummyjson.com/products/1");
	}
}

const gen = generator();
const res = gen.next().value;
console.log(res)
