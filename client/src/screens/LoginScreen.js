const LoginScreen = {
  after_render: () => {
    const password = document.getElementById("password");
    const form = document.getElementById("loginForm");
    const errorElement = document.getElementById("error");
    var numbers = /[0-9]/g;
    var alphabets = /[a-zA-Z]/g;
    form.addEventListener("submit", (e) => {
      var messages = [];

      if (password.value.length < 6) {
        messages.push("Password must be atleast 6 characters");
      }

      if (password.value.indexOf(" ") >= 0) {
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
    });

  },
     render: () => {
 return `
    <div class='login'>
        <div tabindex='0' style="color: black;  font-size: 1.4rem;  font-weight: bold">
          Login
        <div style="color: grey; font-size: 1.1rem; font-weight: bold">
          Get access to your orders, Wishlist and Recommednations
        </div>
        </div>
        <form id="loginForm" action="/client/#/home" onsubmit=''>
    <div class='fields'>
      <label class='field' >Email</label>
      <input type='email' size='40' aria-required="true" required>
      <label class='field'> Password</label>
      <input type='password' aria-required="true" size='40'id="password"
      required>
      <button class='authButton' aria-label="Login form submission" type='submit'  value='Log In'>Log In</button />
    </div>
   
    </form>
  
  </div>
     <div tabindex="0"aria-live="assertive" role="alert" id="error"></div>
</div>`; 
     }
    }
export default LoginScreen;