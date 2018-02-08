var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

var radius = 2;
var drawing = false;

canvas.width = window.innerWidth;
canvas.height = 500;


ctx.lineWidth = radius * 2;
ctx.fillStyle = '#D69246';
ctx.strokeStyle = '#D69246';
ctx.shadowColor = '#D69246';

ctx.shadowBlur = 3;
ctx.miterLimit = 1;



var putPoint = function(e){


    if(drawing) {

        ctx.lineWidth = radius * 2;
        ctx.shadowBlur = 2;

        ctx.lineTo(e.offsetX, e.offsetY);
        //ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        //ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
        ctx.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI);

        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
        //ctx.moveTo(e.clientX, e.clientY)
    
    }
    
}


var active = function(e){
        drawing = true;
        putPoint(e);
}

var inactive = function(){
    drawing = false;
    ctx.beginPath();
}


canvas.addEventListener('mousedown', active);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', inactive);
canvas.addEventListener('mouseout', inactive);

window.addEventListener('load resize', function(){
    canvas.width = window.innerWidth;
    
});
