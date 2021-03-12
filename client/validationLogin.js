const validateLogin = () => {
const password = document.getElementById("password")
console.log(password);
const form = document.getElementById("loginForm");
const errorElement = document.getElementById("error");
var numbers = /[0-9]/g;
var alphabets = /[a-zA-Z]/g;
form.addEventListener("submit", (e) => {
  var messages = [];

  if (password.value.length < 6) {
    messages.push("Password must be atleast 6 characters");
  }

  if (password.value.indexOf(' ') >= 0) {
    messages.push("Password must not have space");
  }

  if (!password.value.match(numbers)) {
    messages.push("Password must have atleast one number");
  }
  if (!password.value.match(alphabets)) {
    messages.push("Password must have atleast one character");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
  console.log(messages);
})
}

window.addEventListener("load", validateLogin);
