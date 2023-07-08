Function.prototype.xBind = function (param, ...args) {
  const FUNC = this
	return function (...params1) {
    FUNC.apply(param, [...args, ...params1])
  };
};

const NAME = {
	firstName: "Romesh",
	lastName: "Kosme",
};
function printName (city) {
  console.log(this.firstName +" "+ this.lastName, city)
}
const FUNC = printName.xBind(NAME)
FUNC("Raipur")