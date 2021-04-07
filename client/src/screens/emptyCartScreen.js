function emptyCartScreen(content){
     content.innerHTML =  `<div class='center'tabindex='0' aria-label="open cart items">
    
        <div class='flex-box-empty'>
          <div class='cart-flex-nav'>
            <p>
              My Cart
              <button onclick="return closeModal()" id='close-x'>X</button>
            </p>
          </div>
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              height: 500px;
              text-align: center;
            "
          >
            <section>
              
              <p style="font-size:1.2rem">No items in your cart</p>
              <p
                style="display: "inline-block";
                  font-weight: 100;font-size:1rem;"
              
              >
                Your favourite items are just a click away.
              </p>
            </section>

            <div class='cart-footer' style=" border-top: transparent">
              <button onclick="return closeModal()"  style='margin-top:40px'type='submit'>
                Start Shopping        
              </button>
            </div>
          </div>`;
 

}