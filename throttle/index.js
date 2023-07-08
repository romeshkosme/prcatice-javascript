// document.getElementById("btn").addEventListener(
// 	"click",
// 	throttle(() => console.log("click me"), 3000)
// );

// function throttle(cb, delay) {
// 	let flag = true;
// 	return () => {
// 		if (flag) {
// 			cb();
// 			flag = false;
// 			setTimeout(() => {
// 				flag = true;
// 			}, delay);
// 		}
// 	};
// }

document.getElementById("btn").addEventListener(
	"click",
	throttle(() => console.log("call api"), 5000)
);

function throttle(cb, delay) {
	let flag = true;
	return () => {
		if (flag) {
			cb();
			flag = false;
			setTimeout(() => {
				flag = true;
			}, delay);
		}
	};
}
