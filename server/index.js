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
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
var arrayOfItems = [];
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

app.get("/api/items", (req, res) => {
  res.send(items)
});

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

app.post("/api/cart/add", (req, res) => {
  console.log(req.body);
  arrayOfItems.push(req.body._id);
  console.log(arrayOfItems);
  var x = arrayOfItems.length;
  var obj = {myItems: x};
  res.send(JSON.stringify(obj));

});
app.get("/api/cart/numberOfItems", (req, res) => {
  var numOfItems = arrayOfItems.length;
  console.log(numOfItems)
  res.send(numOfItems);
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