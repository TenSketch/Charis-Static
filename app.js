// Hamburger menu
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//show nav on scroll
let showNav = document.querySelector('nav')

window.onscroll = function() {
  if (document.body.scrollTop || document.documentElement.scrollTop ) {
    showNav.style.visibility = "visible";
    showNav.style.opacity = 1;
  } else {
    showNav.style.visibility = "hidden";
    showNav.style.opacity = 0;
  }
}

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

