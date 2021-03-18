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
/* Redirect all routes to our (soon to exist) "index.html" file */

app.get("/", (req, res) => {
  res.sendFile(path.resolve("client", "index.html"));
});

app.get("/api/banners", (req, res) => {
  res.send(banners);
});

app.get("/api/categories", (req, res) => {
  res.send(categories);
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/cart/add", (req, res) => {
  arrayOfItems.push(req.body._id);
  var x = arrayOfItems.length;
    obj['myItems'] = x;
  // var obj = { myItems: x};
  let key = req.body._id;
  if(obj[key]){
    obj[key]++;
  } else {
    obj[key] = 1;
  }
  res.send(JSON.stringify(obj));
});
app.post("/api/cart/remove", (req, res) => {
  arrayOfItems.splice(arrayOfItems.indexOf(req.body._id), 1);
   var x = arrayOfItems.length;
   obj["myItems"] = x;
   let key = req.body._id;
   if (obj[key]) {
     obj[key]--;
   } 
   res.send(JSON.stringify(obj));
});
app.get("/api/cart/items", (req, res) => {
  var filteredItems = products.filter(product => {
    return arrayOfItems.indexOf(product.id) !== -1
  })
  res.send({allItems: arrayOfItems, filteredItems: filteredItems})
});
app.get("/api/cart/clear", (req, res) => { 
  arrayOfItems = [];
  obj = { myItems: 0 };
})
const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// var json = JSON.parse(data);
// json.push(req.body);
//var json =  JSON.parse(addToCart[0]);
// var json =
// addToCart.push(req.body);

// fs.writeFile("addToCart", JSON.stringify(json));
// });

// fs.readFile("server/addToCart/index.post.json", function (err, data) {
//   if (err) {
//     throw err;
//   }
//   const content = data;
//   console.log(typeof(content));

//   var json = JSON.parse(content);
//   console.log(json)
//   content.push(req.body);
//   // fs.writeFile("server/addToCart/index.post.json", JSON.stringify(content));

// app.post("/api/cart/add"), (req, res) => {
//   console.log("inside add")
//   console.log(req.body)
// }
// app.post("/api/cart/add", (req, res) => {
//   //  console.log(addToCart);
//   console.log(req.body);
//  addToCart.push(req.body);
//  console.log(addToCart)
// fs.appendFile('./server/addToCart/index.post.json', req.body, (err, data) => {
//   if (err) {
//     throw err;
//   }
// res.send(JSON.parse(data.reponse));
// });

//  arrayOfItems.map(product_id => {
//    //console.log(product_id)
//    //console.log(products)
//    items = products.filter(product=>{
//      return product.id === product._product_id})
//    console.log(items);
