function Person (name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Romesh', 12)
const person2 = new Person('Anurag', 29)

Person.prototype.gender = 'male'

console.log(person1.gender)
console.log(person2.gender)

Person.prototype = {gender: 'female'}
console.log('after change -- ')
console.log(person1.gender)
console.log(person2.gender)