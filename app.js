var menu = document.querySelector('#mobile-menu');
var menuLinks = document.querySelector('.navbar__menu');
var navLogo = document.querySelector('#navbar__logo');

// display mobile menu
var mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
var highlightMenu = () => {
  var elem = document.querySelector('.highlight')
  var homeMenu = document.querySelector('#home-page')
  var aboutMenu = document.querySelector('#about-page')
  var servicesMenu = document.querySelector('#services-page')
  let scrollPos = window.scrollY
  // console.log(scrollPos);

  // adds the highlight class to my menu items
  if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  }

  if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// close mobile menu when clicking item
var hideMobileMenu = () => {
  var menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 839 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}


menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)
