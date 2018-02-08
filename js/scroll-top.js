(function(){

    var button = document.querySelector(".scroll-up");
    var mainNav = document.querySelector(".main-nav");

    function animateScroll() {
    
        if(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 0) {
    
            window.scrollBy(0, -35);
            setTimeout(animateScroll, 1);
        } 
    }
    
    
    button.addEventListener("click", function(e){
    
        e.stopPropagation();
        
        animateScroll();
    
    }, false);
    
    
    window.addEventListener("scroll", function(e){
    
        if(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 0) {
            button.classList.remove("hidden");
            mainNav.classList.add("bg-fixed");

            if(mainNav.classList.contains("bg-fixed")) {
                if(document.querySelector(".page-nav")){
                    document.querySelector(".page-nav").classList.remove("nav-opened");
                }
                document.querySelector(".menu-hamburger").classList.remove("hamburger-opened");
            }
            
        } else {
            button.classList.add("hidden");
            mainNav.classList.remove("bg-fixed");

            if(mainNav.classList.contains("bg-fixed")) {
                document.querySelector(".page-nav").classList.add("nav-opened");
            }
            
        }

    
    
    }, false);
    

})();

