/*==================================== toggle  ===================*/

let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classlist.toggle('fa-x');
  navbar.classList.toggle('active')
}