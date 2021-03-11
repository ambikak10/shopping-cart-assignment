const express = require("express");
const cors = require("cors");
const app = express();
const addToCart = require("./addToCart/index.post.json");
const banners = require("./banners/index.get.json");
const categories = require("./categories/index.get.json");
const products = require("./products/index.get.json");
const path = require("path");
app.use(cors());

/* Redirect all routes to our (soon to exist) "index.html" file */

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve("client", "index.html"));
// });

app.get("/api/banners", (req, res) => {
  console.log("banner api");
  //console.log(banners)
  res.send(banners);
});

app.get("/api/categories", (req, res) => {
   console.log("categories api");
  res.send(categories);
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

// app.get("/api/items", (req, res) => {
//   fs.readFile(addToCart, "utf8", (err, data) => {
//     if (err) {
//       throw err;
//     }

//     res.send(JSON.parse(data));
//   });
// });

// app.post("/api/add", (req, res) => {
//   fs.writeFile(addToCart, JSON.stringify(addedItemDetails), (err, data) => {
//     if (err) {
//       throw err;
//     }

//     res.send(JSON.parse(data.reponse));
//   });
// });

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
