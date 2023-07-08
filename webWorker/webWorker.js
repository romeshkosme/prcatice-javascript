onmessage = (e) => {
  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
  console.log(res)
  postMessage(res)
});
}