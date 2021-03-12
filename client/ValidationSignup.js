const validateSignup = () => {
  const password1 = document.getElementById("password1");
   const password2 = document.getElementById("password2");
  const form = document.getElementById("signupForm");
  const errorElement = document.getElementById("error");
  var numbers = /[0-9]/g;
  var alphabets = /[a-zA-Z]/g;
  form.addEventListener("submit", (e) => {
    var messages = [];

    if (password1.value.length < 6) {
      messages.push("Password must be atleast 6 characters");
    }

    if (password1.value.indexOf(" ") >= 0) {
      messages.push("Password must not have space");
    }

    if (!password1.value.match(numbers)) {
      messages.push("Password must have atleast one number");
    }
    if (!password1.value.match(alphabets)) {
      messages.push("Password must have atleast one character");
    }
    if(password2.value.length){
     if (password1.value !== password2.value) {
       messages.push("Passwords must match");
     }
    }
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
    console.log(messages);
  });
};

window.addEventListener("load", validateSignup);
