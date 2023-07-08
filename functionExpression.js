// let math = {
//     'factit': function factorial(n) {
//       console.log(n)
//       if (n <= 1) {
//         return 1;
//       }
//       return n * factorial(n - 1);
//     }
//   };
  
//   math.factit(3) //3;2;1;
  
const job = {
    // result: 10,
    subtract: function sub(n) {
        console.log(n)
        return n > 0 ? this.subtract(n-1) : 1;
    }
}

job.subtract(5)