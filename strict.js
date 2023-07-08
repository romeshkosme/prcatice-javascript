function Profile() {
    "use strict"
    this.fname = "Romesh"
    console.log(this)
    const age = () => {
        "use strict"
        console.log(this)
    }
    age();
}

new Profile();