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
    <div class='my-container'>
      <div class='row'>
        <div tabindex='0' role="navigation" aria-label="category list in product page"class='col-xxl-3 col-lg-3 col-md-3 productPage-categories'>
          ${categories
            .map((item) => {
              return `
             ${
               item.id === _id
                 ? `<div id="highlight">
                <a href='/client/#/products/${item.id}'>${item.name}</a>
              </div>`
                 : `<div>
                <a href='/client/#/products/${item.id}'>${item.name}</a>
              </div>`
             }`;
            })
            .join("\n")}

        </div>
        <div class='col-lg-9'>
          <div class='custom-row'>
            ${products
              .map((item) => {
                return `
                <div class='lg-3 products-page-card' aria-label="product-details" tabindex='0'>
                  <p  tabindex='0'>${item.name}</p>
                  <img src=${item.imageURL}  tabindex='0' alt=${item.name}/>
                  <section  tabindex='0'>${item.description}</section>
                  <div>
                    <span  tabindex='0'>MRP Rs.${item.price}</span>
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
    </div>
    
    
       <div id="mobile-view">

    <select name="categories">
    <option value="categories">Categories</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
    </select>
   

  <div class="container-fluid">
     <h2>Apple</h2>
     <div class="row">
      <div class=" col-6">
   <img src="/client/assets/logo.png" alt="">
     </div>
        <div class="col-6 desc">
         <section>These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution</section>
         <button>Buy now @ MRP Rs.200</button>
         </div>
     </div>
     </div>

 </div>

    `;
  },
};
export default ProductsScreen;
