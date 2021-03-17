const CartScreen = {
  render: async() => {
    const res = await fetch("http://localhost:5000/api/cart/items", {
      headers: {
         "Content-type": "application/json",
       },
     });
  
     if (!res || !res.ok) {
       return "<div>Error in getting products</div>";
     }
        const cartItems = await res.json();
        console.log(cartItems);
     const totalItems =  cartItems.length;
     if(totalItems !== 0){
    return `
    <div class='center'>
      <div class='cartcard'>
        <div class='flex-box'>
          <div class='cart-flex-nav'>
            <p>
              My Cart <span>( ${totalItems}  items )</span>
              <button class='close-x'>X</button>
            </p>
          </div>
          <div class="wrapping">
          ${cartItems
            .map((item) => {
              return `
          
             <div class='cart-items'>
            <div class='lg-3'>
              <img class='apple' src=${item.imageURL} alt=${item.name}/>
            </div>
            <div class='lg-7 '>
              <p>${item.name}</p>
                <span class='plus'>
                  <span class='dash'>-</span>
                </span>
                <span class='qt'>1</span>
                <span class='plus'>
                  <span class='dash'>+</span>
                </span>

                <span class="price">
                  X&nbsp;&nbsp;&nbsp; Rs.187
                </span>
              
            </div>
            <span class='lg-2 rupees'>Rs.187</span>
          </div>`;
            })
            .join("\n")}
             </div>

          <div class='wont-find-cheaper'>
            <img src="http://127.0.0.1:5500/static/images/lowest-price.png"/>
          
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
    </div>`;
    } else {
     return `
      <div className='center'>
      <div className='cartcard'>
        <div className='flex-box-empty'>
          <nav className='cart-flex-nav'>
            <h6>
              My Cart
              <button className='close-x'>X</button>
            </h6>
          </nav>
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
              
              <p style="marginBottom: -4px">No items in your cart</p>
              <p
                style="display: "inline-block";
                  font-size: 13px;
                  font-weight: 100;"
              
              >
                Your favourite items are just a click away.
              </p>
            </section>

            <div className='cart-footer' style=" border-top: transparent">
              <button style='margin-top:40px'type='submit'>
                Start Shopping
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
     `;
  }
}
}
export default CartScreen;
