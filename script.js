const menu_toggle = document.getElementsByClassName("menu-toggle");
const slideNav = document.getElementsByTagName("ul");

menu_toggle[0].addEventListener("click", function () {
     menu_toggle[0].classList.toggle("toggle");
     slideNav[0].classList.toggle("slide");
})
