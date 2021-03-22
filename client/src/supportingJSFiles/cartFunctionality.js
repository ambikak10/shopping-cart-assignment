function addToCart(product_id, price, sku) {
  fetch("http://localhost:5000/api/cart/add", {
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      _id: product_id,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json())
    .then((body) => {
      document.getElementById("items").innerHTML = body.myItems + `   items`;
      document.getElementById(
        "nav-total"
      ).innerHTML = `( ${body.myItems}  items )`;
      document.getElementById(product_id).innerHTML = body[product_id];
      let quantity = (document.getElementById(product_id).innerHTML =
        body[product_id]);
      let totalItemPrice =
        document.getElementsByClassName(sku)[0].innerHTML * quantity;
      document.getElementById(sku).innerHTML = totalItemPrice;
      let x = document.querySelectorAll(".item-cost");
      let sum = 0;
      for (let i = 0; i < x.length; i++) {
        sum = sum + parseInt(x[i].innerHTML);
      }
      document.getElementById("cart-price").innerHTML = sum;
    });
}
function removeFromCart(product_id, price, sku) {
  fetch("http://localhost:5000/api/cart/remove", {
    method: "POST",
    body: JSON.stringify({
      _id: product_id,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((body) => {
      document.getElementById("items").innerHTML = body.myItems + `   items`;
      document.getElementById(
        "nav-total"
      ).innerHTML = `( ${body.myItems}  items )`;
      document.getElementById(product_id).innerHTML = body[product_id];
      let quantity = document.getElementById(product_id).innerHTML;
   
      let totalItemPrice =
        document.getElementsByClassName(sku)[0].innerHTML * quantity;
      document.getElementById(sku).innerHTML = totalItemPrice;

      let x = document.querySelectorAll(".item-cost");
      let sum = 0;
      for (let i = 0; i < x.length; i++) {
        sum = sum + parseInt(x[i].innerHTML);
      }
         if (quantity == "0") {
           document.getElementsByClassName(product_id)[0].remove();
         }
      //  if (quantity == "0") {
      //    sum = sum - price;
      //  }
      document.getElementById("cart-price").innerHTML = sum;

    });
}

var modal = document.getElementById('simpleModal')
var modalBtn =  document.getElementById('modal-btn')
modalBtn.addEventListener('click',  openModal);

async function openModal(){
  // if(window.isValidUser){
  modal.style.display = "block";
  const content =  document.getElementsByClassName('cartcard')[0];
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
      content.innerHTML = ` <div tabindex='0' aria-hidden="false"aria-label="open cart items"class='flex-box'>
          <div class='cart-flex-nav'>
            <p>
              My Cart <span id="nav-total">( ${totalItems}  items )</span>
              <button onclick = "return closeModal()" id='close-x'>X</button>
            </p>
          </div>
          <div class="wrapping">
          ${itemInCart
            .map((item, index) => {
              return `
          
             <div class='cart-items ${item.id}'>
            <div class='lg-3 xs-3'>
              <img class='apple' src=${item.imageURL} alt=${item.name}/>
            </div>
            <div class='lg-7 xs-7 '>
              <p>${item.name}</p>
              <button class='decrement' onclick="return removeFromCart('${
                item.id
              }', ${item.price}, '${item.sku}')">
                  <span class="plusOrMinus">-</span>
                </button>
                <span class='qt' id=${item.id}>${map[item.id]}</span>
                <button class='increment'onclick="return addToCart('${
                  item.id
                }', ${item.price}, '${item.sku}')">
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
    } else {
      content.innerHTML = `
           <div class='center'tabindex='0' aria-label="open cart items">
    
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
          </div>`
     }
    } 
    // else {
    //   window.location.href="/client"
    // }
  //  }

async function closeModal(){
 
  fetch("http://localhost:5000/api/cart/clear", {
    headers: {
      "Content-type": "application/json",
    },
  });
  document.getElementById("items").innerHTML = 0 + `   items`;
   modal.style.display = "none";
  }
