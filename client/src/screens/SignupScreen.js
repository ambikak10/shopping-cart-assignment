const SignupScreen = {
  after_render: () => {
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
    if (password2.value.length) {
      if (password1.value !== password2.value) {
        messages.push("Passwords must match");
      }
    }
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  });
  },
  render: () => {
    return `
      <div class='container'>
      <div class='login'>
        <div style="color: black; font-size: 1.4rem; font-weight: bold">
          Signup
           <div style="color: grey; font-size: 1.1rem; font-weight: bold">
            We do not share your personal details with anyone
          </div>
        </div>
         <form id="signupForm" action="/client/#/home" onsubmit=''>
        <div class='fields'>
          <label class='field'>First Name</label>
          <input type='text' aria-label="First name" size='30' aria-required="true"  required></input>
          <label class='field'> Last name</label>
          <input type='text' size='30'aria-required="true"  aria-label="Last name" required></input>

          <label class='field'>Email</label>
          <input type='email' aria-required="true"  size='30' required></input>
          <label class='field'>Password</label>
          <input type='password' id="password1" size='30'aria-required="true"  required></input>
          <label class='field'>Confirm Password</label>
          <input type='password' id="password2"  size='30'aria-required="true" aria-label="Confirm password"required></input>
          <input
            class='authButton'
            type='submit'
            size='30'
            value='Signup'
            aria-label="signup form submission"
          />
        </div>   
        </form>
      </div>
        <div tabindex="0"aria-live="assertive" role="alert" id="error"></div>
    </div>
    `;
  },
};
export default SignupScreen;
