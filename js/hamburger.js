var hamburger = document.querySelector(".menu-hamburger");
var li = document.querySelectorAll(".page-nav li");

(function navList(){

    for(var i = 0; i < li.length; i++){
        li[i].addEventListener("click", function(){
            document.querySelector(".menu-hamburger").classList.remove("hamburger-opened");
            document.querySelector(".page-nav").classList.remove("nav-opened");
        }, false);
    }

    hamburger.addEventListener("click", function(){
        document.querySelector(".menu-hamburger").classList.toggle("hamburger-opened");
        document.querySelector(".page-nav").classList.toggle("nav-opened");
    }, false);

})();


