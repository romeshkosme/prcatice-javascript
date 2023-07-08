document.querySelector("ul").addEventListener("click", (e) => {
	console.log(e.target.id);
});
document.querySelector("#form").addEventListener("keyup", (event) => {
    console.log(event.target.dataset)
    if (event.target.dataset.uppercase != undefined) {
        event.target.value = event.target.value.toUpperCase()
    }

})