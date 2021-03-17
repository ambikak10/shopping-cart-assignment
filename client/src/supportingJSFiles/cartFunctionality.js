function addToCart(product_id) {
  console.log(product_id);
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
       document.getElementById("items").innerHTML = body.myItems + `   items` 
    });
 
}

 