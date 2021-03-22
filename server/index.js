const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const addToCart = require("./addToCart/index.post.json");
const banners = require("./banners/index.get.json");
const categories = require("./categories/index.get.json");
const products = require("./products/index.get.json");
const path = require("path");
const fs = require("fs");
app.use(cors());

//Body parser configuration
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
var arrayOfItems = [];
var obj= {myItems: 0};
var auth = [];
/* Redirect all routes to our (soon to exist) "index.html" file */

app.get("/", (req, res) => {
  res.sendFile(path.resolve("client", "index.html"));
});

// @route   POST api/signup
// @desc    Signup a user

app.post("/api/signup", (req, res) => {
  if(auth.length > 0){
    for (var i = 0; i < auth.length; i++) {
      if (auth[i].email == req.body.email) {
      return res.send(JSON.stringify({ err: "Email already exists" }));
      } 
    }
  } else {
     auth.push(req.body);
     return res.send(JSON.stringify({ success: "Signup successful" }));
  }
});


// @route   POST api/login
// @desc    Login a user

app.post("/api/login", (req, res) => {
  console.log(req.body);
  for(var i = 0; i < auth.length; i++){
    if(auth[i].email == req.body.email){
      if(auth[i].password == req.body.password){
     return res.send(JSON.stringify({isAuthenticated : true}))
      } else {
        return res.send(JSON.stringify({ err: "Password is incorrect" }));
      }
  } 
}
    console.log("email not verified");
    return res.send(JSON.stringify({ err: "This is not a registered email" }));
});

// @route   GET api/banners
// @desc    Get carousel banners
app.get("/api/banners", (req, res) => {
  res.send(banners);
});

// @route   GET api/categories
// @desc    Get categories
app.get("/api/categories", (req, res) => {
  res.send(categories);
});


// @route   GET api/products
// @desc    Get all the products
app.get("/api/products", (req, res) => {
  res.send(products);
});

// @route   POST api/cart/add
// @desc    Add products to the cart

app.post("/api/cart/add", (req, res) => {
  arrayOfItems.push(req.body._id);
  let x = arrayOfItems.length;
    obj['myItems'] = x;
  let key = req.body._id;
  if(obj[key]){
    obj[key]++;
  } else {
    obj[key] = 1;
  }
  res.send(JSON.stringify(obj));
});

// @route   POST api/cart/remove
// @desc    Remove products from the cart

app.post("/api/cart/remove", (req, res) => {
  arrayOfItems.splice(arrayOfItems.indexOf(req.body._id), 1);
   let x = arrayOfItems.length;
   obj["myItems"] = x;
   let key = req.body._id;
   if (obj[key]) {
     obj[key]--;
   } 
   res.send(JSON.stringify(obj));
});

// @route   GET api/cart/items
// @desc    get all items in the cart

app.get("/api/cart/items", (req, res) => {
  var filteredItems = products.filter(product => {
    return arrayOfItems.indexOf(product.id) !== -1
  })
  res.send({allItems: arrayOfItems, filteredItems: filteredItems})
});

// @route   GET api/cart/clear
// @desc    Clear all items in the cart on closing the cart
app.get("/api/cart/clear", (req, res) => { 
  arrayOfItems = [];
  obj = { myItems: 0 };
  res.send({message: "cart cleared"})
})

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

