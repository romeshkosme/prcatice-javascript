let count = 0
const searchApi = () => {
  console.log("search ... ", ++count);
};

let doSomething = search(searchApi, 500);

function search(fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}
