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
     const categories = await resCategories.json();
     if (categories && categories.length > 0) {
       categories.sort(function (a, b) {
         return a.order - b.order;
       });
     }

    return `
      <div class='container-slick container'>
          <div class='fancy-line'></div>
        ${categories &&
          categories.length > 0 &&
          categories.map((item, index) => {
            if (index % 2 === 0) {
              return `
                <div class='row'>
                  <div class='home-categories'>
                    <img class='category-image' src=${item.imageUrl} />
                    <div style='text-align: center'>
                      <h3>${item.name}</h3>
                      <div style='word-wrap: break-word; width: 390px;'>
                        ${item.description}
                      </div>

                      <button class='homeCategoriesButton' type='submit'>
                        Explore ${item.key}
                      </button>
                    </div>
                  </div>
                  <div class='fancy-line'></div>
                </div>`
            } else {
              return `
                <div class='row'>
                  <div class='home-categories'>
                    <div style='text-align:center'>
                      <h3>${item.name}</h3>
                      <p style='word-break: break-word; width: 380px';>
                        ${item.description}
                      </p>
                      <button class='homeCategoriesButton' type='submit'>
                        Explore ${item.key}
                      </button>
                    </div>
                    <img class='category-image'
                      src=${item.imageUrl}
                    />
                  </div>
                  <div class='fancy-line'></div>
                </div>`;
            }
          }).join('\n')}
        ;
      </div>`
  }
}
export default HomeScreen;
        {/* <Slider {...settings}>
          {banners.map((item) => (
            <div>
              <img
                class='banner'
                src={item.bannerImageUrl}
                alt={item.bannerImageAlt}
              />
            </div>
          ))}
        </Slider> */}
    
