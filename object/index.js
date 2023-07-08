// const person = {
//   firstName: "Romesh",
//   lastName: "Kosme",
//   get getFirstName () {
//     return this.firstName
//   },
//   set setFirstName(name) {
//     this.firstName = name;
//   }
// }
// console.log('person.firstName - ', person.firstName)
// console.log('person.getFirstName - ', person.getFirstName)
// // console.log('person.getFirstName() - ', person.getFirstName())
// person.setFirstName = 'Tobu'
// console.log('person.getFirstName', person.getFirstName)
const student = {};
Object.defineProperty(student, "setName", {
	set: function(name) {
		this.name = name;
	},
});
Object.defineProperty(student, "getName", {
	get: function() {
		return this.name
	},
});
student.setName = "romesh"
console.log(student)
console.log(student.getName)