let loop = true;
if (window.Worker) {
	const myWorker = new Worker("webWorker.js");

  document.getElementById("increase").addEventListener("click", () => {
    myWorker.postMessage("args");
    myWorker.onmessage = (e) => {
      console.log("worker response - ", e.data);
    };
    myWorker.terminate();
  });
	// while (loop) {
	// 	console.log("while");
	// }
}