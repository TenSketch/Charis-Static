// navbar mahima 
// Hamburger menu
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//show nav on scroll
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

//login form popup on vector-2 img
document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".dropdown-menu").style.display = "none";
  document.querySelector(".popup").classList.add("active");
  });

  document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
  });
//signup form popup on vector-2 img
document.querySelector("#show-register").addEventListener("click",function(){
  document.querySelector(".popup2").classList.add("active2");
  });
  document.querySelector(".popup2 .close-btn2").addEventListener("click",function(){
  document.querySelector(".popup2").classList.remove("active2");
  });
  document.getElementById("login-reappear").addEventListener("click", function(){
    // document.querySelector('.popup2.active2')
    document.querySelector('.popup2.active2').style.display = "none";
    // mybox.style.display = "none";
  })

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


