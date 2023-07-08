const profile = {
  firstName: "Romesh",
  lastName: "Kosme",
};

function getFullName() {
  console.log(`My name is ${this.firstName} ${this.lastName}`);
}

// Function.prototype.myCallOne = function (context, ...args1) {
//     const func = this;
//     const contextWindow = context || window;
//     contextWindow.func = func;
//     const result = contextWindow.func(...args1);
//     delete contextWindow.func;
//     return result;
// }

// Function.prototype.myCallTwo = function (context, ...args1) {
//     context._this = this;
//     return context._this(...args1)
// }

Function.prototype.myCallThree = function (context) {
  context._this = this;
  return context._this()
}
getFullName.myCallThree(profile);