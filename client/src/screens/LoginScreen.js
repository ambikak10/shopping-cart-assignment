const LoginScreen = {
  after_render: () => {
    const password = document.getElementById("password");
    const form = document.getElementById("loginForm");
    const email = document.getElementById("login-email");
    const errorElement = document.getElementById("error");
    let numbers = /[0-9]/g;
    let alphabets = /[a-zA-Z]/g;
    let isAuthenticated;
   isAuthenticated = form.addEventListener("submit", async(e) => {
      // let messages = [];

      // if (password.value.length < 6) {
      //   messages.push("Password must be atleast 6 characters");
      // }

      // if (password.value.indexOf(" ") >= 0) {
      //   messages.push("Password must not have space");
      // }

      // if (!password.value.match(numbers)) {
      //   messages.push("Password must have atleast one number");
      // }
      // if (!password.value.match(alphabets)) {
      //   messages.push("Password must have atleast one character");
      // }
      // if (messages.length > 0) {
      //   e.preventDefault();
      //   errorElement.innerText = messages.join(", ");
      // } else  {
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
            // window.isValidUser = body.isAuthenticated;
            isAuthenticated =  body.isAuthenticated;
            //console.log(isValidUser)
            window.location.href='/client/#/home'
            return isAuthenticated;
          }

        });
      // }
    })
    // .then((window) => {
    //   window.isAuthenticated = true;
    // }).catch(err => {
    //   console.log(err);
    // });
    console.log(isAuthenticated)
    console.log(window.isValidUser)
    window.isValidUser = isAuthenticated;
  },
     render: () => {
 return `
    <div class='login'>
        <div class="d-none d-sm-block d-sm-none d-md-block" tabindex='0'>
          Login
        <div>
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
      <button class='authButton' aria-label="Login form submission" size='40'type='submit'  value='Log In'>Log In</button />
    </div>
   
    </form>
  
  </div>
     <div tabindex="0"aria-live="assertive" role="alert" id="error"></div>
</div>`; 
     }
    }
export default LoginScreen;