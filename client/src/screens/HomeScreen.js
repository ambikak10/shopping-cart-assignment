const HomeScreen = {
  after_render: () => {
            $(document).ready(function () {
              $(".carousel").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                // infinite: true,
                // cssEase: "linear",
                arrows: true,
                
              });
            });
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
     const resBanners = await fetch("http://localhost:5000/api/banners", {
       headers: {
         "Content-type": "application/json",
       },
     });
     if (!resBanners || !resBanners.ok) {
       return "<div>Error </div>";
     }
     const categories = await resCategories.json();
     if (categories && categories.length > 0) {
       categories.sort(function (a, b) {
         return a.order - b.order;
       });
     }
    const banners = await resBanners.json();
    return `
      <div class='container container-slick'>
       <div class="carousel">
      ${banners
        .map((item, index) => {
          return `
              <img
                src=${item.bannerImageUrl}
                alt=${item.bannerImageAlt}
              />`;
        })
        .join("\n")}
         </div>
          <div class='fancy-line'></div>
        
        ${
          categories &&
          categories.length > 0 &&
          categories
            .map((item, index) => {
              if (index % 2 === 0) {
                return `
                <div tabindex ='0'class='row' aria-label="category section in home page">
                  <div class='home-categories'>
                    <img tabindex ='0'class='category-image' src='${item.imageUrl}'/>
                    <div style='text-align: center'>
                      <h1 tabindex ='0'id="homepage-itemname">${item.name}</h1>
                      <div tabindex ='0'style='word-wrap: break-word; width: 390px;font-size: 1.1rem'>
                        ${item.description}
                      </div>

                   <button role="navigation to category products"onclick="window.location.href='/client/#/products/${item.id}'" class='homeCategoriesButton' type='submit'>
                        Explore ${item.key}
                      </button>
                    </div>
                  </div>
                  <div class='fancy-line'></div>
                </div>`;
              } else {
                return `
                <div class='row'tabindex ='0'>
                  <div class='home-categories'aria-label="category section in home page">
                    <div style='text-align:center'>
                      <h1 tabindex ='0'id="homepage-itemname">${item.name}</h1>
                      <div tabindex ='0'style='word-break: break-word; width: 380px; font-size: 1.1rem'>
                        ${item.description}
                      </div>
                      <button role="navigation to category products" onclick="window.location.href='/client/#/products/${item.id}'" class='homeCategoriesButton' type='submit'>
                        Explore ${item.key}
                      </button>
                    </div>
                    <img tabindex ='0'class='category-image'
                      src=${item.imageUrl}
                    />
                  </div>
                  <div class='fancy-line'></div>
                </div>`;
              }
            })
            .join("\n")
        }
      </div>`;
  }
}
export default HomeScreen;

    
