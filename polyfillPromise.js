function myPromise(promises) {
  const RESULT = [];
  return new Promise(async (resolve, reject) => {
    let index = 0;
    promises.forEach((promise, index) => {
      promise()
        .then((res) => {
          RESULT.push(res);
          if (index === promise.length - 1) {
            resolve(RESULT);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

function callOne() {
  return new Promise((resolve) => {
      setTimeout(()=> {
          resolve("one");
      }, 1000)
  });
}

function callTwo() {
  return new Promise((resolve) => {
    resolve("callTwo");
  });
}

Promise.all([callOne(), callTwo()])
  .then((res) => {
    console.log("promise all response -- ", res);
  })
  .catch((err) => {
    console.log("promise all err -- ", err);
  });
