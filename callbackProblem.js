const calc = {
  result: 0,
  multiple(payload) {
    this.result *= payload;
    return this;
  },
  divide(payload) {
    this.result /= payload;
    return this;
  },
  add(payload) {
    this.result += payload;
    return this;
  },
  subtract(payload) {
    this.result -= payload;
    return this;
  },
};

console.log(calc.add(10).multiple(10).divide(5).subtract(5).result)