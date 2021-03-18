const CartScreen = {
  render: async () => {
    const res = await fetch("http://localhost:5000/api/cart/items", {
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res || !res.ok) {
      return "<div>Error in getting products</div>";
    }
    const cartItems = await res.json();
    const totalItems = cartItems.allItems ? cartItems.allItems.length : 0;
    if (cartItems.allItems) {
      var map = cartItems.allItems.reduce(function (obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
      }, {});
    }
    var cartTotal = 0;
    if (cartItems.filteredItems) var itemInCart = cartItems.filteredItems;
    for(let i = 0; i < itemInCart.length; i++){
      if(itemInCart[i].id in map){
        cartTotal = cartTotal + itemInCart[i].price * map[itemInCart[i].id];
      }
    }
    if (totalItems !== 0) {
      return `
    <div class='center'>
      <div class='cartcard'>
        <div class='flex-box'>
          <div class='cart-flex-nav'>
            <p>
              My Cart <span id="nav-total">( ${totalItems}  items )</span>
              <button class='close-x'onclick="return clearAll()">X</button>
            </p>
          </div>
          <div class="wrapping">
          ${itemInCart
            .map((item, index) => {
              return `
          
             <div class='cart-items ${item.id}'>
            <div class='lg-3'>
              <img class='apple' src=${item.imageURL} alt=${item.name}/>
            </div>
            <div class='lg-7 '>
              <p>${item.name}</p>
              <button class='decrement' onclick="return removeFromCart('${
                item.id
              }', ${item.price})">
                  <span class="plusOrMinus">-</span>
                </button>
                <span class='qt' id=${item.id}>${map[item.id]}</span>
                <button class='increment'onclick="return addToCart('${
                  item.id
                }', ${item.price})">
                  <span class="plusOrMinus">+</span>
                </button>
                <span class="price"> X&nbsp;&nbsp;&nbsp; Rs.<span class=" ${
                  item.price
                }">${item.price} 
                </span><span>
              
            </div>
            <span class='lg-2 rupees'>Rs. <span class="item-cost"id=${item.price}>${
                item.price * map[item.id]
              }</span></span>
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
              <span class="rs">Rs.</span>
              <span id="cart-price">${cartTotal}</span>
              <p class="gt">&gt<p>
            </button>
          </div>
        </div>
      </div>
    </div>`;
    } else {
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
  },
};
export default CartScreen;
