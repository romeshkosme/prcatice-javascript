// const NAME = {
//   firstName: "Romesh",
//   lastName: "Kosme",
// };

// const printName = function (lang, year) {
//   console.log("lang -- ", lang);
//   console.log("year -- ", year);
//   console.log(
//     `My name is ${this.firstName} ${this.lastName} and I am learning ${lang}, exp of ${year} years.`
//   );
// };

// printName.bind(NAME)("javascript");

// Function.prototype.myBind = function(context) {
//     const args = Array.from(arguments).slice(1);
//     return (...callArgs) => {
//         return this.apply(context, args.concat(callArgs));
//     }
// }

// Function.prototype.myBind = function (...args1) {
//   const obj = this;
//   return function (...args2) {
//     return obj.apply(args1[0], [...args1.slice(1), ...args2]);
//   };
// };

// Function.prototype.myBind = function(context) {
//   const args = Array.from(arguments).slice(1);
//   const self = this
//   return (...callArgs) => {
//     return self.apply(context, [...args, ...callArgs])
//   }
// }
//////////////////////////////////////////////////////////////////

// Function.prototype.myBindOne = function (context, ...args) {
//   context._this = this;
//   return (...args1) => context._this(...args, ...args1);
// };

// Function.prototype.myBindTwo = function (context, ...args1) {
//   const fn = this;
//   return (...args2) => fn.apply(context, [...args1, ...args2]);
// };

// printName.myBindTwo(NAME)("javascript", 2010);

/////////////////////////////////////////////////////////////////
// Function.prototype.myBind = function (args, ...args1) {
//   let cb = this;
//   return function (...args2) {
//     cb.apply(args, [...args1, ...args2]);
//   };
// };

// function printName() {
//   console.log(`${this.firstName} ${this.lastName}`);
// }
// let name = {
//   firstName: "Romesh",
//   lastName: "Kosme",
// };
// let getName = printName.myBind(name);
// getName();

const person = {
  firstName: "Romesh",
  lastName: "Kosme",
  age: 29
}
function getPerson() {
  console.log(`${this.firstName} ${this.lastName} is ${this.age}.`)
}
Function.prototype.myBind = function (person) {
  const _this = this;
  return function() {
    _this.call(person)
  }
}
const func = getPerson.myBind(person)
func()
