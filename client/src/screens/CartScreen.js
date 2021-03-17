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
       
     const totalItems =  cartItems.length;
     if(totalItems !== 0){
    return `
    <div class='center'>
      <div class='cartcard'>
        <div class='flex-box'>
          <div class='cart-flex-nav'>
            <p>
              My Cart <span>( ${totalItems}  items )</span>
              <button class='close-x'onclick="window.history.back()">X</button>
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
               <span> <button class='decrement'>
                  <span class="plusOrMinus">-</span>
                </button>
                <span class='qt'>1</span>
                <button class='increment'>
                  <span class="plusOrMinus">+</span>
                </button>
                <span class="price">
                  X&nbsp;&nbsp;&nbsp; Rs.${item.price}
                </span></span>
              
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
            <button onclick="window.history.back()" type='submit'>
              <span>Proceed to checkout</span>
              <p>Rs.187&nbsp; &nbsp; &gt;</p>
            </button>
          </div>
        </div>
      </div>
    </div>`;} else {
      return `
           <div class='center'>
      <div class='cartcard'>
        <div class='flex-box-empty'>
          <div class='cart-flex-nav'>
            <p>
              My Cart
              <button onclick="window.history.back()" class='close-x'>X</button>
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
              
              <p style="marginBottom: -4px; font-size:1.2rem">No items in your cart</p>
              <p
                style="display: "inline-block";
                  font-weight: 100;font-size:1rem;"
              
              >
                Your favourite items are just a click away.
              </p>
            </section>

            <div class='cart-footer' style=" border-top: transparent">
              <button onclick="window.location.href='/client/#/products'"  style='margin-top:40px'type='submit'>
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
