function User(emailID, password){
  this.emailID = emailID;
  this.password = password;
}
class Store {
  #users;
  constructor() {
    if (Store.instance == null) {
      this.#users = {};
      this.categories = null;
      this.products = null;
      this.banners = null;

      Store.instance = this;
    }
    return Store.instance;
  }

  signup(emailID, password1) {
    if (!this.#users.emailID) {
      var user = new User(emailID, password1);
      this.#users.emailID = user;
      return true;
    } else {
      return false;
    }
  }

  login(emailID, password) {
    if (this.#users.emailID && this.#users.emailID.password === password) {
      return true;
    }
    return false;
  }
  async getCategories() {
    const resCategories = await fetch("http://localhost:5000/api/categories", {
      headers: {
        "Content-type": "application/json",
      },
    });
    const categories = await resCategories.json();
    this.categories = categories;
    return this.categories;
  }

  async getBanners() {
    const resBanners = await fetch("http://localhost:5000/api/banners", {
      headers: {
        "Content-type": "application/json",
      },
    });
    const allbanners = await resBanners.json();
    this.banners = allbanners;
    return this.banners;
  }

  async getProducts() {
    const resProducts = await fetch("http://localhost:5000/api/products", {
      headers: {
        "Content-type": "application/json",
      },
    });
    const products = await resProducts.json();
    this.products = products;
    return this.products;
  };

  selectChangeHandler(){
    let x = document.getElementById("mySelect").value;
    console.log(x);
  
    let sel = document.getElementById("mySelect");
      console.log(sel);
    let text = sel.options[sel.selectedIndex].text;
    if (text == "Categories") {
      window.location.href = `/client/#/products`;
    } else {
      window.location.href = `/client/#/products/${x}`;
    }
  }
}
const globalStore = new Store();
export default globalStore;


