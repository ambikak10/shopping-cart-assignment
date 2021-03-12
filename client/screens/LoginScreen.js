const LoginScreen = {
     render: () => {
 return `
    <div class='login'>
        <div style="color: black;  font-size: 1.4rem;  font-weight: bold">
          Login
        <div style="color: grey; font-size: 1.1rem; font-weight: bold">
          Get access to your orders, Wishlist and Recommednations
        </div>
        </div>
        <form id="loginForm" action="/client/#/home"
    <div class='fields'>
      <label class='field'>Email</label>
      <input type='email' size='30' required>
      <label class='field'> Password</label>
      <input type='password' size='30'id="password"
      required>
      <button class='authButton' type='submit'  value='Log In'>Log In</button />
    </div>
    <div id="error"></div>
    </form>
  </div>
</div>`; 
     }
    }
export default LoginScreen;