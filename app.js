//Aman's nav
const toggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".nav-items");

toggle.addEventListener("click", function(){
    if(siteNav.classList.contains("nav-items--open")) {
      siteNav.classList.remove("nav-items--open");
      toggle.classList.remove("open");

      siteNav.classList.add("nav-items--closed");
    } else{
        siteNav.classList.add("nav-items--closed");
        toggle.classList.add("open");

        siteNav.classList.add("nav-items--open");
    }
});

// // Hamburger menu
// let menuToggle = document.querySelector('.toggle');
// let navigation = document.querySelector('.navigation');

// menuToggle.onclick = function () {
//     menuToggle.classList.toggle('active')
//     navigation.classList.toggle('active')
// }

// //show nav on scroll
// let showNav = document.querySelector('nav')

// window.onscroll = function() {
//   if (document.body.scrollTop || document.documentElement.scrollTop ) {
//     showNav.style.visibility = "visible";
//     showNav.style.opacity = 1;
//   } else {
//     showNav.style.visibility = "hidden";
//     showNav.style.opacity = 0;
//   }
// }

//Image slider
function imgSlider(anything) {
    document.querySelector('.imgbox img').src = anything;
}
function changeBgColor(color) {
    const bg = document.querySelector('.bg');
    bg.style.background = color;
}
let el = document.querySelectorAll('.thumb li');
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function () {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'check';
        }
        el[i].className = 'check active';
    }
}

