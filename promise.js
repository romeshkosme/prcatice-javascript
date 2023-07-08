// composition
// function one() {
//   return 1;
// }

// function two() {
//   return 2;
// }

// function three() {
//   return 3;
// }

// Promise.all([one(), two(), three()]).then(function (values) {
//   console.log(values);
// });

// sequential composition
function one() {
  return 1;
}

function two() {
  return 2;
}

function three() {
  return 3;
}

[one, two, three]
  .reduce((p, f) => {
      console.log("p",p);
      console.log("f",f);
      return p.then(f)
    }, Promise.resolve())
  .then((result3) => {
    console.log(result3);
  });
