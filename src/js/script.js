'use stric'
var mainNavToggle = document.querySelector(".main-nav__toggle");
var MainNav = document.querySelector(".main-nav__list");
mainNavToggle.addEventListener("click", function(evt) {
    evt.preventDefault();
    MainNav.classList.toggle("main-nav__list--opened");
    mainNavToggle.classList.toggle("main-nav__toggle--opened");
});  