//jshint esversion: 6

//mobile menu code

const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.menu-close');
const menuItems = document.querySelector('.menu-item');

function menuOpen (){
  mobileMenu.style.height = "100vh";
  mobileMenu.style.width = "100vw";
  mobileMenu.style.opacity = "1";
}

function menuClose (){
  mobileMenu.style.height ="0";
  mobileMenu.style.width ="0";
  mobileMenu.style.opacity = "0";
}

hamburger.addEventListener('click', menuOpen);

menuCloseButton.addEventListener('click', menuClose);

menuItems.addEventListener('click', menuClose);

const update = document.querySelector("#update");
function hideUpdate(){

  update.style.display = 'none';
  enableScrolling();
}

function showUpdate(){
  update.style.display = "block"
}
