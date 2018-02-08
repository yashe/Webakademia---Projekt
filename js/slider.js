(function() {

    var sliderFoto = document.querySelectorAll(".bg-foto");

    var arrayFoto = [];

    for (var i = 0; i < sliderFoto.length; i++) {
        arrayFoto.push(sliderFoto[i]);
    }

    var number = 0;

    function changeSlider() {
        if (window.innerWidth >= 768) {
            if (number >= arrayFoto.length) {
                number = 0;
            }

            var activ = document.querySelector(".active-foto");

            if (activ) {
                activ.classList.remove("active-foto");

            }
            arrayFoto[number].classList.add("active-foto");

            setTimeout(changeSlider, 5000);
            number++;
        }

    }
    window.addEventListener("load", changeSlider(), false);

})();

