function Product(name, image, description, price, product_id, sku) {
  this.name = name;
  this.image = image;
  this.description = description;
  this.price = price;
  this.sku = sku;
  this.id = product_id;
}
function Cart() {
  this.cart = {};
  this.totalItemsInCart = [];
  this.uniqueItems = [];

  Cart.prototype.addToCart = function (
    product_id,
    sku,
    name,
    description,
    price,
    image
  ) {
    const singleProduct = new Product(
      name,
      image,
      description,
      price,
      product_id,
      sku
    );
    this.totalItemsInCart.push(product_id);
    if (!this.cart[product_id]) {
      this.cart[product_id] = 1;
      this.uniqueItems.push(singleProduct);
      console.log(this.uniqueItems);
    } else {
      this.cart[product_id]++;
    }
    document.getElementById("items").innerHTML =
      this.totalItemsInCart.length + `    items`;

    document.getElementById("nav-total").innerHTML =
      `( ${this.totalItemsInCart.length}   items )`;

    document.getElementById(product_id).innerHTML =
      this.cart[product_id];

    let quantity = document.getElementById(product_id).innerHTML;
    let totalItemPrice =
      document.getElementsByClassName(sku)[0].innerHTML * quantity;
    document.getElementById(sku).innerHTML = totalItemPrice;
    let x = document.querySelectorAll(".item-cost");
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum = sum + parseInt(x[i].innerHTML);
    }
    document.getElementById("cart-price").innerHTML = sum;
  };



 Cart.prototype.removeFromCart = function(product_id, sku){
   this.totalItemsInCart.splice(this.totalItemsInCart.indexOf(product_id), 1);
   if (this.cart[product_id]) {
      this.cart[product_id]--;
    }

  document.getElementById("items").innerHTML =
  this.totalItemsInCart.length + `    items`;

  document.getElementById(
    "nav-total"
  ).innerHTML = `( ${this.totalItemsInCart.length}   items )`;

  document.getElementById(product_id).innerHTML =
  this.cart[product_id];

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
   this.uniqueItems = this.uniqueItems.filter(item => item.id !== product_id)
   console.log(this.uniqueItems)
}
document.getElementById("cart-price").innerHTML = sum;
}
}

var cartStore = new Cart();
