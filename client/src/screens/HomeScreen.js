const HomeScreen = {
 
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
    console.log(banners)
    return `
      <div class='container container-slick'>
      ${banners
        .map((item, index) => {
          console.log(index);
          return `
           <div class="carousel">
              <img
                class='banner'
                src=${item.bannerImageUrl}
                alt=${item.bannerImageAlt}
              />
            </div>`;
        })
        .join("\n")}
          <div class='fancy-line'></div>
        
        ${
          categories &&
          categories.length > 0 &&
          categories
            .map((item, index) => {
              if (index % 2 === 0) {
                return `
                <div class='row'>
                  <div class='home-categories'>
                    <img class='category-image' src=${item.imageUrl} />
                    <div style='text-align: center'>
                      <p>${item.name}</p>
                      <div style='word-wrap: break-word; width: 390px;font-size: 1.2rem'>
                        ${item.description}
                      </div>

                   <button onclick="window.location.href='/client/#/products/${item.id}'" class='homeCategoriesButton' type='submit'>
                        Explore ${item.key}
                      </button>
                    </div>
                  </div>
                  <div class='fancy-line'></div>
                </div>`;
              } else {
                console.log("categories");
                return `
                <div class='row'>
                  <div class='home-categories'>
                    <div style='text-align:center'>
                      <p>${item.name}</p>
                      <div style='word-break: break-word; width: 380px; font-size: 1.2rem'>
                        ${item.description}
                      </div>
                      <button onclick="window.location.href='/client/#/products/${item.id}'" class='homeCategoriesButton' type='submit'>
                        Explore ${item.key}
                      </button>
                    </div>
                    <img class='category-image'
                      src=${item.imageUrl} alt="category image"
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

    
