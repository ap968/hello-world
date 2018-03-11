// Thi is a comment
/* When te user presses the submit button, change the greeting to indiacate their name */

// get access to the button and set up a click event handler
// var button = document.getElementsByName("submit");
var button = document.getElementById("submit-header-name");
button.onclick = changeGreeting;

function changeGreeting(){
    var greeting = document.getElementsByTagName("h1")[0];
    var input = document.getElementById("header-name").value;
    greeting.innerHTML="Hello, " + input + "!";
}
