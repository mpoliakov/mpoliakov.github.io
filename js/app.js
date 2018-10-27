var header = document.querySelector('.header');
header.classList.remove('header--no-js');

var siteNavigation = document.querySelector('.header__site-navigation');
var openMenuBtn = document.querySelector('.header__menu-btn--open');
var closeMenuBtn = document.querySelector('.header__menu-btn--close');

openMenuBtn.addEventListener('click', function(){
  siteNavigation.classList.remove('header__site-navigation--closed');
  siteNavigation.classList.add('header__site-navigation--opened');
});

closeMenuBtn.addEventListener('click', function(){
  siteNavigation.classList.remove('header__site-navigation--opened');
  siteNavigation.classList.add('header__site-navigation--closed');
});
