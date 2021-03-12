const SignupScreen = {
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
          <input type='text' size='30' required></input>
          <label class='field'> Last name</label>
          <input type='text' size='30' required></input>

          <label class='field'>Email</label>
          <input type='email' size='30' required></input>
          <label class='field'>Password</label>
          <input type='password' id="password1" size='30' required></input>
          <label class='field'>Confirm Password</label>
          <input type='password' id="password2"  size='30' required></input>

          <input
            class='authButton'
            type='submit'
            size='30'
            value='Signup'
          />
        </div>   
        </form>
      </div>
        <div id="error"></div>
    </div>
    `;
  },
};
export default SignupScreen;
