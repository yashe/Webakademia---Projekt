var swatches = ['#D69246', '#DCE786', '#51956C', '#FFFFFF'];
var deleteDraw = document.querySelector(".delete-draw");


var colorSwatch;

for(var i = 0; i < swatches.length; i++){
    colorSwatch = document.createElement('button');
    colorSwatch.classList.add('swatch');
    colorSwatch.style.backgroundColor = swatches[i];
    colorSwatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(colorSwatch);

    
    if(i === 0){
        colorSwatch.classList.add('active');
    }
    if(i === 3){
        colorSwatch.classList.add('border-dark');
    }
    
}


function setColor(color){
    
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    var activeColor = document.querySelector(".active");

    if(activeColor) {
        activeColor.classList.remove("active");
    }
}

function setSwatch(e){
    // identify swatch
    var swatch = e.target;

    // set color
    setColor(swatch.style.backgroundColor);

    // give active class
    swatch.classList.add('active');
}


deleteDraw.addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);