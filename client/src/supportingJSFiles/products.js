function selectChangeHandler(){
 let x = document.getElementById("mySelect").value;
 let sel = document.getElementById("mySelect");
 let text = sel.options[sel.selectedIndex].text;
 if(text == 'Categories'){
   window.location.href = `/client/#/products`
 } else {
 //document.getElementById("option1").value = text;
 window.location.href = `/client/#/products/${x}`
 //document.getElementById("option1")[0].innerHTML = text; 
    }
}
// select.onclick = function () {
//   select.options[0].selected = true;
// };