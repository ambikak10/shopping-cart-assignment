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
    <div class='fields'>
      <label class='field'>Email</label>
      <input type='text' size='30'></input>
      <label class='field'> Password</label>
      <input type='text' size='30'></input>

      <input class='authButton' type='submit' value='Log In' />
    </div>
  </div>
</div>

       
      `;
     }
    }
export default LoginScreen;