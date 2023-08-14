
// Sticky navbar
const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 70)
});

// Menu toggle
let menu = document.getElementById('menu-icon');
let nav = document.querySelector('.nav')

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    nav.classList.toggle('toggle');
}