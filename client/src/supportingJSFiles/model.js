function User(emailID, password){
  this.emailID = emailID;
  this.password = password;
}
function Store(){
 this.users = {};
 this.categories = null;
 this.products = {};
 this.banners = null;

Store.prototype.getCategories = async function(){
  const resCategories = await fetch("http://localhost:5000/api/categories", {
       headers: {
         "Content-type": "application/json",
       },
  });
  const categories = await resCategories.json();
  this.categories = categories;
  return this.categories;
}
Store.prototype.getBanners = async function(){
  const resBanners = await fetch("http://localhost:5000/api/banners", {
       headers: {
         "Content-type": "application/json",
       },
     });
  const allbanners = await resBanners.json();
  this.banners = allbanners;
  return this.banners; 
}
Store.prototype.signup = function (emailID, password1) {
  if (!this.users.emailID) {
  var user = new User(emailID, password1);
  this.users.emailID = user;
  console.log(this.users);
  return true;
  } else {
    return false;
  }
};
Store.prototype.login = function (emailID, password) {
  if (this.users.emailID && this.users.emailID.password === password) {
    return true;
  }
 return false;
};
}

var globalStore = new Store();