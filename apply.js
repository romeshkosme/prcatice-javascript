let fullName = {
    firstName: "Romesh",
    lastName: "Kosme",
  };
  
  function printName(title, company) {
    console.log("params -- ", title, company);
    console.log(`My name is ${this.firstName} ${this.lastName}, I'm a ${title} at ${company}`);
    return false;
  }
  
  printName.apply(fullName, ["JavaScript Developer", "Startupflux"]);

  // apply method is used to call a function with a specific this value and arguments provided as an array.
  