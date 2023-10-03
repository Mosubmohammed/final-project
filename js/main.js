let menu = document.querySelector('#menu-bars');
let buttons = document.querySelector('.nav-buttons');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    buttons.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    buttons.classList.remove('active');
}
document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');

    
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  loop: true,
  });


  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  });

  // ! cart open close
  let cartIcon=document.querySelector('#cart-icon');
  let cart=document.querySelector('.cart');
  let closeCart=document.querySelector('#close-cart');

// ! open cart

cartIcon.onclick=()=>{
  cart.classList.add("active");
}
// ! close cart
closeCart.onclick=()=>{
  cart.classList.remove("active");
}


// ! making add to cart
// ? cart working js
if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready);

}
else{
  ready();
}

// ! making function
function ready(){
  // remove item from cart
  var removeCartButtons=document.getElementsByClassName("cart-remove");
  for(var i=0;i<removeCartButtons.length;i++){
    var button=removeCartButtons[i];
    button.addEventListener('click',removeCartItem);
  }
  // ! quantity change 
  var quantityInputs=document.getElementsByClassName("cart-quantity");
  for(var i=0;i<quantityInputs.length;i++){
    var input=quantityInputs[i];
    input.addEventListener("change",quantityChanged);
  }
  // ! add to cart
  var addCart=document.getElementsByClassName("add-cart");
  for(var i=0;i<addCart.length;i++){
    var button=addCart[i];
    button.addEventListener("click",addCartClicked);
  }
}

// !remove cart item
function removeCartItem(event){
  var buttonClicked=event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// !quantity change 
function quantityChanged(event){
var input=event.target;
if(isNaN(input.value) || input.value<=0){
  input.value=1;

}
updateTotal();
}


// ! add cart function
function addCartClicked(event){
var button = event.target;
var shopProducts=button.parentElement;
var title=shopProducts.getElementsByClassName("product-title2")[0].innerText;
var price=shopProducts.getElementsByClassName("pice")[0].innerText;
var productImg=shopProducts.getElementsByClassName("image")[0].src
addProductToCart(title, price, productImg);
updateTotal();
}

function addProductToCart(title, price, productImg){
  var cartShopBox=document.createElement('div');
  cartShopBox.classList.add('box');
  var cartItems=document.getElementsByClassName('box-container')[0];
  var cartItemsNames=cartItems.getElementsByClassName('product-title2');
  for(var i=0; i<cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title){
      alert('you have already added this item to the cart');
      return;
    }
}
var cartBoxContent=`
<img src="${productImg}"  alt="" class="cart-img"/>
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input 
    type="number" 
    name="" id="" 
    value="1" 
    class="cart-quantity"/>
</div>

<i class="fa-solid fa-trash cart-remove"></i>`;
cartShopBox.innerHTML=cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0]
.addEventListener('click',removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0]
.addEventListener('change',quantityChanged);
}






// update total
function updateTotal(){
   var cartContent = document.getElementsByClassName("cart-content")[0];
   var cartBoxes = cartContent.getElementsByClassName("cart-box");
   var total=0;
   for (var i=0;i<cartBoxes.length;i++){
    var cartBox=cartBoxes[i];
    var priceElement=cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
    var price=parseFloat(priceElement.innerText.replace("$",""));
    var quantity=quantityElement.value;
    total+=price * quantity;

   }
  //  ?if price contains some cents
   total=Math.round(total * 100)/100;
   document.getElementsByClassName("total-price")[0].innerText="$"+total;
}