function addAsync(x, y, cb) {
  setTimeout(function () {
    cb(x + y);
  }, 1000);
}

var thunk = function (cb) {
  return addAsync(10, 15, cb);
};

thunk(function (sum) {
  console.log(sum);
});
