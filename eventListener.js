let count = 0;
let list;
function add() {
    count++
  let javaElem = document.getElementById("java");
  let list = document.createElement("li")
  list.innerHTML = `${count}`;
  javaElem.appendChild(list);
}

// Select the node that will be observed for mutations
var targetNode = document.getElementById('java');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        console.log("mutation -- ", mutation.target.innerText)
        if (mutation.target.innerHTML.includes("5")) {
            console.log("YOOLooooooooooooo")
            observer.disconnect()
        }
    }
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// observer.disconnect(); 









// function() {
//     // window.dataLayer = window.dataLayer || [];
//     // window.dataLayer.push({
//     // 'event': 'interComThankYou'
//     // });
//      console.log("Test Custom gtm")
//    setTimeout(function() {
//      var interCom = document.querySelector('#intercom-container > .intercom-app > .intercom-messenger-frame > iframe');
//      var nodeList = interCom.contentWindow.document.querySelectorAll(".intercom-comment.intercom-kz4unw.e1en7ww91")
//      for (var index = 0; index< nodeList.length; index++) {
//        console.log(nodeList[index])
//        console.log(nodeList[index].innerText)
//        console.log(nodeList[index].innerHTML)
//      }
//    }, 4000)