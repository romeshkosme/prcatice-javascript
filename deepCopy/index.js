// function deepClone(obj) {
// 	if (typeof obj !== "object" || obj === null) return obj;

// 	const NEW_OBJECT = Array.isArray(obj) ? [] : {};

// 	for (const KEY in obj) {
// 		const VALUE = obj[KEY];
// 		NEW_OBJECT[KEY] = deepClone(VALUE);
// 	}
// 	return NEW_OBJECT;
// }
function deepClone(obj) {
	if (typeof obj !== "object" || obj instanceof Date || obj === null) return obj;

	const NEW_OBJECT = Array.isArray(obj) ? [] : {};

	for (const key in obj) {
		const VALUE = obj[key];
		NEW_OBJECT[key] = deepClone(VALUE);
	}
	return NEW_OBJECT;
}

const TEST = {
	name: "Romesh",
	dob: new Date(30, 05, 1996),
	print: function () {
		console.log(this.name, this.dob);
	},
};

console.log(deepClone(TEST));
const temp = deepClone(TEST);
temp.print();
