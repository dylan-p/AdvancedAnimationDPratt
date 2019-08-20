var ctx
var cnv


window.onload = init;

function init(){
  cnv = document.getElementById('cnv');
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
  cnv.style.border = 'solid black 2px';
  cnv.style.backgroundColor = 'rgba(0,44,55, .5)';
  ctx = cnv.getContext('2d');
  animate();
}

var x, y, dx, dy, radius;
x = Math.random()*window.innerWidth;
y = Math.random()*window.innerHeight;
dx = Math.random()*10 - 5;
dy = Math.random()*10 - 5;
radius = 30;

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

  ctx.strokeStyle = 'rgb(85, 107, 47)';
  ctx.lineWidth = '10';
  ctx.fillStyle = 'rgb(255, 140, 0)';
  ctx.beginPath();

  ctx.arc(x,y, radius, Math.PI*2, 0, false);
  ctx.fill();
  ctx.stroke();

  x +=dx;
  y +=dy;
    if(x > window.innerWidth || x<0) dx = -dx;
    if(y > window.innerHeight || y<0) dy = -dy;
}
