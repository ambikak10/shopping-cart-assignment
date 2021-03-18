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
  })
    .then((response) => response.json())
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
    // Adding body or contents to send
    body: JSON.stringify({
      _id: product_id,
    }),

    // Adding headers to the request
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
function clearAll() {
  fetch("http://localhost:5000/api/cart/clear", {
    headers: {
      "Content-type": "application/json",
    },
  });
  document.getElementById("items").innerHTML = 0 + `   items`;
  window.history.back();
}
// function decrement(product_id) {
//   removeFromCart(product_id);

//   function increment(product_id) {
//     addToCart(product_id);
//   }

// console.log(index);
// var quantity = parseInt(
//   document.getElementsByClassName("qt")[index].innerHTML
// );
//  var next_qt = parseInt(document.getElementsByClassName("qt")[index+1].innerHTML);
// quantity--;
// if (!quantity) {
//   document.getElementsByClassName("cart-items")[index].remove();
//  document.getElementsByClassName("qt")[
//     index
//   ].innerHTML = next_qt.toString();
// } else {
//   document.getElementsByClassName("qt")[
//     index
//   ].innerHTML = quantity.toString();
// }
// }

// var quantity = parseInt(
//   document.getElementsByClassName("qt")[index].innerHTML
// );
// quantity++;
// document.getElementsByClassName("qt")[index].innerHTML = quantity.toString();
      // let totalItemPrice =
      //   document.getElementsByClassName(price)[0].innerHTML * quantity;
      // document.getElementById(price).innerHTML = totalItemPrice;
      // let sum = parseInt(document.getElementById("item-cost").innerHTML);
      // let x = document.querySelectorAll(".item-cost");
      // for(let i=0; i < x.length; i++){

      // }
