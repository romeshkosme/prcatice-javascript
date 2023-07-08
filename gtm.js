function gtm() {
    document.getElementById("data").addEventListener("")
}
let number = 0;
function add() {
    number++;
    console.log(number)
    const element = document.createElement("span");
    element.innerHTML = `<span>${number}<span>`;
    document.getElementById("data").appendChild(element);
}
var targetFrame = window.top.frames[1];
var targetOrigin = "https://api-iam.intercom.io";
var windowMessageButton = document.querySelector('#intercom-container');

windowMessageButton.addEventListener('message', function(event) {
    console.log("event -- ", event)
    console.log("event data -- ", event.data)
});