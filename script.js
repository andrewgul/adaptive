let fixedNav = document.querySelector(".fixed-nav-bar");

window.addEventListener("scroll", function(){
    if (window.pageYOffset >= 150) {
        fixedNav.classList.add("visible");
    }
    if (window.pageYOffset <= 150) {
        fixedNav.classList.remove("visible");
    }
})
