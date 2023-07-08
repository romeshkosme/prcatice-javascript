document.getElementById("grandparent").addEventListener("click", () => {
	console.log("grand parent");
}, true);// useCapture, by default it is false. it means event bubbling occur by default.
document.getElementById("parent").addEventListener("click", () => {
	console.log("parent");
}, true);
document.getElementById("child").addEventListener("click", () => {
	console.log("child");
}, true);
