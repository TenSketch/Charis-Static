
const toggle = document.querySelector(".hamburger");
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