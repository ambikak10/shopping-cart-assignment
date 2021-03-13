const CartScreen = {
  render: () => {
    return `
    <div class='center'>
      <div class='cartcard'>
        <div class='flex-box'>
          <nav class='cart-flex-nav'>
            <p>
              My Cart<span>(1 item)</span>
              <button class='close-x'>X</button>
            </p>
          </nav>

          <div class='cart-items'>
            <div class='lg-3'>
              <img class='apple' src={apple} alt="image of the item"/>
            </div>
            <div class='lg-7 '>
              <p> Apples</p>
              <span>
                <span class='plus'>
                  <span class='dash'>-</span>
                </span>
                <span class='qt'> 1 </span>
                <span class='plus'>
                  <span class='dash'>+</span>
                </span>

                <span class="price">
                  X&nbsp;&nbsp;&nbsp; Rs.187
                </span>
              </span>
            </div>
            <span class='lg-2 rupees'>Rs.187</span>
          </div>

          <div class='wont-find-cheaper'>
            <img src={lowestPrice}/>
          
            <span>You won't find it cheaper anywhere</span>
          </div>

          <div class='cart-footer'>
            <p>Promo code can be applied on payment change</p>
            <button type='submit'>
              <span>Proceed to checkout</span>
              <p>Rs.187&nbsp; &nbsp; &gt;</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    `;
  },
};
export default CartScreen;
