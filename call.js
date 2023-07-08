// let fullName = {
//   firstName: "Romesh",
//   lastName: "Kosme",
// };

// function printName(title) {
//   console.log(this);
//   console.log(`My name is ${this.firstName} ${this.lastName}, I'm a ${title}`);
//   return false;
// }

// printName.call(fullName, "JavaScript Developer", "C++");

// call method is used to call a function with a specific this value and arguments provided individually.

// function Name (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   console.log(`${this.firstName} ${this.lastName}`)
// }

// function Age(firstName, lastName) {
//   Name.call(this, firstName, lastName)
//   this.address = 'Raipur'
// }

// const age = new Age('Romesh', 'Kosme')

// ------------------------------------------------------

var obj = {globProp: 'Wisen'};

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(obj);