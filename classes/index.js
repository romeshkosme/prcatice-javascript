class Profile {
  #name
	constructor(name) {
		this.#name = name;
	}
	get personName() {
		return this.#name;
	}
	set personName(name) {
		this.#name = name;
	}
}

const profile = new Profile('Romesh')
console.log(profile.name)
console.log(profile.personName)
profile.personName = "Anurag"
console.log("after")
console.log(profile.name)
console.log(profile.personName)
