const ProductScreenMobile = {
  render: () => {
    return `
    <div>

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
export default ProductScreenMobile;

  