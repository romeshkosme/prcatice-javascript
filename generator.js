function* idMaker(index) {
  while (true) {
    if (index === 5) return index;
    yield index++;
  }
}

const gen = idMaker(10);
console.log(gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//    GENERATOR WITH ARGUMENT
// function *profile() {
//     console.log(0)
//     console.log(1, yield, arguments)
//     console.log(2, yield, arguments)
//     console.log(3, yield, arguments)
// }

// const gen = profile();
// gen.next();
// gen.next({"Romesh":"Romesh", "Kosme": "Kosme"})
// gen.next("Anurag", "Thakur")
// gen.next()
// gen.next()

// GENERATOR WITH OBJECTS
// const someObj = {
//     name: "Romesh",
//     *generator () {
//         yield "a";
//         yield "b";
//         yield this.name;
//     }
// }

// const gen = someObj.generator()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())