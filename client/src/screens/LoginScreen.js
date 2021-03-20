const LoginScreen = {
  after_render: () => {
    const password = document.getElementById("password");
    const form = document.getElementById("loginForm");
      const email = document.getElementById("login-email");
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
      } else  {
        e.preventDefault();
        
        fetch("http://localhost:5000/api/login", {
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json",
          },
        }).then((response) => response.json()).then((body) =>{
          console.log(body)
          if(body.err) { 
            alert(body.err);
          } else if(body.isAuthenticated) {
            window.isValidUser = body.isAuthenticated;
            window.location.href='/client/#/home'
          }

        });
      }
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
        <form id="loginForm">
    <div class='fields'>
      <label class='field' >Email</label>
      <input id="login-email"type='email' size='40' aria-required="true" required>
      <label class='field'> Password</label>
      <input  aria-required="true" size='40'id="password"
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