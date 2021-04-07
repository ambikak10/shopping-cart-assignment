function cartScreen(totalItemsNumber, content, cartTotal, itemInCart, map){
   if(totalItemsNumber !== 0){
  for(var i = 0; i < itemInCart.length; i++){
    if(itemInCart[i].id in map){
        cartTotal = cartTotal + itemInCart[i].price * map[itemInCart[i].id];
    }
  }
  content.innerHTML = ` <div tabindex='0' aria-hidden="false"aria-label="open cart items"class='flex-box'>
          <div class='cart-flex-nav'>
            <p>
              My Cart <span id="nav-total">( ${totalItemsNumber}  items )</span>
              <button onclick = "return closeModalwithoutClearing()" id='close-x'>X</button>
            </p>
          </div>
          <div class="wrapping">
          ${itemInCart
            .map((item, index) => {
              return `
          
             <div class='cart-items ${item.id}'>
            <div class='lg-3 xs-3'>
              <img class='apple' src=${item.image} alt=${item.name}/>
            </div>
            <div class='lg-7 xs-7 '>
              <p>${item.name}</p>
              <button class='decrement' onclick="return cartStore.removeFromCart('${
                item.id
              }', '${item.sku}')">
                  <span class="plusOrMinus">-</span>
                </button>
                <span class='qt' id=${item.id}>${map[item.id]}</span>
                <button class='increment'onclick="return cartStore.addToCart('${
                  item.id
                }','${item.sku}', '${item.name}', '${item.description}', ${
                item.price
              }, '${item.imageURL}')">
                  <span class="plusOrMinus">+</span>
                </button>
                <span class="price"> X&nbsp;&nbsp;&nbsp; Rs.<span class=" ${
                  item.sku
                }
                }">${item.price} 
                </span><span>
              
            </div>
            <span class='lg-2 xs-2 rupees'>Rs. <span class="item-cost"id=${
              item.sku
            }>${item.price * map[item.id]}</span></span>
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
           <button onclick = "return closeModal()" type='submit'>
              <span>Proceed to checkout</span>
              <span class="rs">Rs.</span>
              <span id="cart-price">${cartTotal}</span>
              <p class="gt">&gt<p>
            </button>
          </div>
        </div>
      </div>
    </div>`;
 }
}
