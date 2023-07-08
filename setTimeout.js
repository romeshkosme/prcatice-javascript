async function one() {
  console.log()
  const movie = await fetchMovieAPI()
  console.log(movie)
}

function two() {
  console.log()
  setTimeout(() => {
    // debugger;
    console.log("two called");
  }, 10);
}

function three() {
  console.log()
  setTimeout(() => {
    // debugger;
    console.log("three called");
  }, 500);
}

// iife
(() => {
  one();
  two();
  three();
})();
