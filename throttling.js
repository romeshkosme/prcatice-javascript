function search() {
  betterSearch(expensive, 700)();
}

function expensive() {
  console.log("expensive");
}

function betterSearch(expensive, limit) {
  let flag = true;
  return () => {
    if (flag) {
      expensive();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}
