var setRadius = function(newRadius){
    if(newRadius < minRad) {
        newRadius = minRad;
    } else if(newRadius > maxRad){
        newRadius = maxRad;
    }

    radius = newRadius;
    ctx.lineWidth = radius * 2;

    radOutput.innerHTML = radius;
}


var minRad = 1,
    maxRad = 5,
    defaultRad = 2,
    interval = 1,
    radOutput = document.getElementById('radval'),
    increase = document.getElementById('increase'),
    decrease = document.getElementById('decrease');


window.addEventListener('keydown', function(e){
    if(e.keyCode === 107) {
        setRadius(radius + interval);
        }

    if(e.keyCode === 109) {
        setRadius(radius - interval);
        }

},false);    


decrease.addEventListener('click', function(e){
    setRadius(radius - interval);
});


increase.addEventListener('click', function(){
    setRadius(radius + interval);
});

setRadius(defaultRad);