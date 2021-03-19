import { parseRequestUrl } from "../supportingJSFiles/utils.js";

const ProductsScreen = {
  render: async () => {
    const resCategories = await fetch("http://localhost:5000/api/categories", {
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resCategories || !resCategories.ok) {
      return "<div>Error in getting products</div>";
    }
    const categories = await resCategories.json();

    const resProducts = await fetch("http://localhost:5000/api/products", {
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resProducts || !resProducts.ok) {
      return "<div>Error in getting products</div>";
    }
    var products = await resProducts.json();
    const request = parseRequestUrl();
    var _id = request.id;
    if (_id) {
      products = products.filter((item) => {
        return item.category === _id;
      });
    }

    return `
    <div class='container'>
      <div class='row'>
        <div aria-label="category list in product page"class='col-xxl-3 col-lg-3 col-md-3 productPage-categories'>
          ${categories
            .map((item) => {
              return `
             ${item.id === _id ?  `<div id="highlight">
                <a href='/#/products/${item.id}'>${item.name}</a>
              </div>`: `<div>
                <a href='/#/products/${item.id}'>${item.name}</a>
              </div>`}`
            })
            .join("\n")}

        </div>
        <div class='col-lg-9'>
          <div class='custom-row'>
            ${products
              .map((item) => {
                return `
                <div class='lg-3 products-page-card'>
                  <p>${item.name}</p>
                  <img src=${item.imageURL} alt=${item.name}/>
                  <section>${item.description}</section>
                  <div>
                    <span>MRP Rs.${item.price}</span>
                    <button id="buy-now" onclick="return addToCart('${item.id}', null, null)">
                      Buy Now
                    </button>
                  </div>
                </div>`;
              })
              .join("\n")}
          </div>
        </div>
      </div>
    </div>`;
  },
};
export default ProductsScreen;
