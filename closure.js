// closure with garbage collector
function parent() {
  let a = 1;
  let b = 2;
  return () => {
    console.log(a);
  };
}
const ONE = parent();
ONE()