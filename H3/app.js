const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icons')
let navList = document.querySelector('.nav-list')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navList.classList.toggle('active')
}
window.onscroll = () => {
  menu.classList.remove('bx-x')
  navList.classList.remove('active')
}