import { parseRequestUrl } from "../supportingJSFiles/utils.js";

const ProductsScreen = {
  after_render: () =>{
    // if (item.id === _id) {
    //   document.getElementById("option1").value = `${item.name}`;
    // } 
  },
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
    let products = await resProducts.json();
    const request = parseRequestUrl();
    let _id = request.id;
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
                    <button id="buy-now" onclick="return addToCart('${item.id}', null)">
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
   
    <div class="mobile-view">
    <select id="mySelect" name="categories" onchange="return selectChangeHandler()" >
    <option>Categories</option>
     ${categories
       .map((item) => {
         if(item.id === _id){
           return `<option selected="true"value=${item.id}>${item.name}</option>`}else{
             return `<option value=${item.id}>${item.name}</option>`
           }
         }) 
       })
       .join("\n")}
    </select></div>
      
  <div class="mobile-view container-fluid">
      ${products
        .map((item) => {
          return `
            <div class="row">
          
     <p>${item.name}</p>
      <div class="col-6">
   <img src=${item.imageURL}  tabindex='0' alt=${item.name}>
     </div>
        <div class="col-6 desc">
         <section  tabindex='0'>${item.description}</section>
         <button id="buy-now" onclick="return addToCart('${item.id}', null, null)">Buy now @ MRP Rs.${item.price}</button>
         </div>
     </div>
     `;
        })
        .join("\n")}
        </div>
       
        
     `;

  },
};
export default ProductsScreen;

// style = "border-bottom: 0.09px dotted rgb(202, 199, 199)";
