class SignupScreen{
  after_render(window){
     const password1 = document.getElementById("password1");
     const password2 = document.getElementById("password2");
     const email = document.getElementById("signup-email");
     const form = document.getElementById("signupForm");
     const errorElement = document.getElementById("error");
     let numbers = /[0-9]/g;
     let alphabets = /[a-zA-Z]/g;
     form.addEventListener("submit", (e) => {
       let messages = [];

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
         messages.push("Password must have atleast one alphabet");
       }
       if (password2.value.length) {
         if (password1.value !== password2.value) {
           messages.push("Passwords must match");
         }
       }
       if (messages.length > 0) {
         e.preventDefault();
         errorElement.innerText = messages.join(", ");
       } else {
         e.preventDefault();
         fetch("http://localhost:5000/api/signup", {
           method: "POST",

           // Adding body or contents to send
           body: JSON.stringify({
             email: email.value,
             password: password1.value,
           }),
           // Adding headers to the request
           headers: {
             "Content-type": "application/json",
           },
         })
           .then((response) => response.json())
           .then((body) => {
             if (body.err) {
               alert(body.err);
             } else {
               console.log(window.isValidUser);
               window.isValidUser = true;
               console.log(window.isValidUser);
               window.location.href = "/client/#/home";
             }
           });
       }
     });
  }
  render(){
   return `
      <div class='container'>
      <div class='login'>
        <div class="d-none d-sm-block d-sm-none d-md-block" tabindex='0'>
          Signup
           <div>
            We do not share your personal details with anyone
          </div>
        </div>
         <form id="signupForm" action="/client/#/home" onsubmit=''>
        <div class='fields'>
          <label class='field'>First Name</label>
          <input type='text' aria-label="First name" size='40' aria-required="true"  required>
          <label class='field'> Last name</label>
          <input type='text' size='40'aria-required="true"  aria-label="Last name" required>

          <label class='field'>Email</label>
          <input type='email' aria-required="true" id="signup-email" size='40' required>
          <label class='field' >Password</label>
          <input  id="password1"aria-required="true" size='40'required>
          <label class='field'>Confirm Password</label>
          <input type='text' id="password2" size='40'aria-required="true" aria-label="Confirm password"required>
          <input 
            class='authButton'
            type='submit'
            size='40'
            value='Signup'
            aria-label="signup form submission"
          />
        </div>   
        </form>
      </div>
        <div aria-live="assertive" role="alert" id="error"></div>
    </div>`
  }
}
export default SignupScreen;

/*const SignupScreen = {
  after_render: (window) => {
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const email = document.getElementById("signup-email");
  const form = document.getElementById("signupForm");
  const errorElement = document.getElementById("error");
  let numbers = /[0-9]/g;
  let alphabets = /[a-zA-Z]/g;
  form.addEventListener("submit", (e) => {
    let messages = [];
  
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
      messages.push("Password must have atleast one alphabet");
    }
    if (password2.value.length) {
      if (password1.value !== password2.value) {
        messages.push("Passwords must match");
      }
    }
    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    } else {
         e.preventDefault();
      fetch("http://localhost:5000/api/signup", {
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          email: email.value,
          password: password1.value,
        }),
        // Adding headers to the request
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((body) => {
          if(body.err) { 
            alert(body.err);
          } else {
           console.log(window.isValidUser);
           window.isValidUser = true;
           console.log(window.isValidUser);
           window.location.href = "/client/#/home";
          }
        });
  }});
  },
  render: () => {
    return `
      <div class='container'>
      <div class='login'>
        <div class="d-none d-sm-block d-sm-none d-md-block" tabindex='0'>
          Signup
           <div>
            We do not share your personal details with anyone
          </div>
        </div>
         <form id="signupForm" action="/client/#/home" onsubmit=''>
        <div class='fields'>
          <label class='field'>First Name</label>
          <input type='text' aria-label="First name" size='40' aria-required="true"  required>
          <label class='field'> Last name</label>
          <input type='text' size='40'aria-required="true"  aria-label="Last name" required>

          <label class='field'>Email</label>
          <input type='email' aria-required="true" id="signup-email" size='40' required>
          <label class='field' >Password</label>
          <input  id="password1"aria-required="true" size='40'required>
          <label class='field'>Confirm Password</label>
          <input type='text' id="password2" size='40'aria-required="true" aria-label="Confirm password"required>
          <input 
            class='authButton'
            type='submit'
            size='40'
            value='Signup'
            aria-label="signup form submission"
          />
        </div>   
        </form>
      </div>
        <div aria-live="assertive" role="alert" id="error"></div>
    </div>
    `;
  },
}; */

