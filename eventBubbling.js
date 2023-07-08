document.getElementById("grandParent").addEventListener("click", (e) => {
  console.log("grandparent called");
}, false);

document.getElementById("parent").addEventListener("click", (e) => {
  console.log("parent called");
});

document.getElementById("child").addEventListener("click", (e) => {
  console.log("child called");
});
