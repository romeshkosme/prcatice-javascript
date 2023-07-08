let vowels = ["a", "e", "i", "o", "u"];
let string = "Please remove all the vowels from the string";
vowels.forEach((vowel) => {
    string = string.replaceAll(vowel, "")
})
console.log(string)