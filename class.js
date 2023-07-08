// class must be declared before accessing it.
// class are hoisted but its value are not initialized.
// body of class is executed in strict mode.

class Test {
  constructor(...sides) {
    // only one constructor method
    // it can call super method to call contructor of super(parent) class.
    this.sides = sides;
  }

  // generator method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }

  static displayName = "Romesh"
  static getName() {
    return "Hello World!"
  }
}

const test = new Test(1,2,3,4,5)
console.log([...test.getSides()])
console.log(Test.displayName)
console.log(Test.getName())