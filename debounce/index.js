(() => {
	let timer;
	document.querySelector("#search").addEventListener("keyup", (event) => {
		search();
	});

	function search() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			console.log("search");
		}, 500);
	}
})();
