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