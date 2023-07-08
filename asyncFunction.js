// async function foo() {
//     const result1 = await new Promise((resolve) => setTimeout(() => resolve("1")))
//     const result2 = await new Promise((resolve) => setTimeout(() => resolve("2")))
// }

// foo()
// function sleep() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//         resolve("2");
//     }, 2000)
//   );
// }

// (async () =>{console.log("1");
// console.log(await sleep());
// console.log("3");
// })()

// function resolveAfter2Seconds() {
//     console.log("starting slow promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("slow")
//         console.log("slow promise is done")
//       }, 2000)
//     })
//   }

//   function resolveAfter1Second() {
//     console.log("starting fast promise")
//     return new Promise(resolve => {
//       setTimeout(function() {
//         resolve("fast")
//         console.log("fast promise is done")
//       }, 1000)
//     })
//   }

// async function concurrentStart() {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds() // starts timer immediately
//     const fast = resolveAfter1Second() // starts timer immediately

//     // 1. Execution gets here almost instantly
//     console.log(await slow) // 2. this runs 2 seconds after 1.
//     console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
//   }

// setTimeout(concurrentStart, 4000)
async function sleep() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("sleep");
    }, 2000)
  );
}

(async () => {
  console.log("1");
  const v = sleep();
  console.log(v);
  console.log("3");
})();
