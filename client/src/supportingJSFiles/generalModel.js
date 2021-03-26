function User(emailID, password){
  this.emailID = emailID;
  this.password = password;
}
function Store(){
 this.users = {};
 this.categories = null;
 this.products = null;
 this.banners = null;

Store.prototype.signup = function(emailID, password1) {
  if (!this.users.emailID) {
  var user = new User(emailID, password1);
  this.users.emailID = user;
  console.log(this.users);
  return true;
  } else {
    return false;
  }
};
Store.prototype.login = function(emailID, password) {
  if (this.users.emailID && this.users.emailID.password === password) {
    return true;
  }
  return false;
};

Store.prototype.getCategories = async function () {
  const resCategories = await fetch("http://localhost:5000/api/categories", {
    headers: {
      "Content-type": "application/json",
    },
  });
  const categories = await resCategories.json();
  this.categories = categories;
  return this.categories;
};

Store.prototype.getBanners = async function () {
  const resBanners = await fetch("http://localhost:5000/api/banners", {
    headers: {
      "Content-type": "application/json",
    },
  });
  const allbanners = await resBanners.json();
  this.banners = allbanners;
  return this.banners;
};
Store.prototype.getProducts = async function () {
  const resProducts = await fetch("http://localhost:5000/api/products", {
    headers: {
      "Content-type": "application/json",
    },
  });
  const products = await resProducts.json();
  this.products = products;
  console.log(this.products);
  return this.products;
};
Store.prototype.selectChangeHandler = function(){
    let x = document.getElementById("mySelect").value;
    let sel = document.getElementById("mySelect");
    let text = sel.options[sel.selectedIndex].text;
    if (text == "Categories") {
      window.location.href = `/client/#/products`;
    } else {
      window.location.href = `/client/#/products/${x}`;
    }
  }
}


var globalStore = new Store();