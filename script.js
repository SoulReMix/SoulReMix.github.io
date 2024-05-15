document.getElementById('target').addEventListener('click', hit);
document.getElementById('area').addEventListener('click',miss);
document.getElementById('start').addEventListener('click',timer);
document.getElementById('start').addEventListener('click',move);
document.getElementById('restart').addEventListener('click',reset);
var counter=0;
var missed=0;
var interval1,interval2;
var hits, miss, rpm, timer, acc, temp;
var hitsn,missn;
hits = document.getElementById('counter');
miss = document.getElementById('misses');
rpm = document.getElementById('rpm');
timer = document.getElementById('timer');
acc = document.getElementById('acc');

function hit() {
    counter++;
    hits.innerHTML = counter;
}
function miss(){
    missed++;
    miss.innerHTML=missed;
}
function timer(){
    interval2 = setInterval(function(){
        if(timer.innerHTML <60){
            temp = timer.innerHTML;
            temp++;
            timer.innerHTML=temp;
        } else if(timer.innerHTML ==60){
            math();
            clearInterval(interval2);
        }
    },1000)
}
function math(){
    let rpmn, accn;
    hitsn= hits.innerHTML;
    missn= miss.innerHTML;
    rpmn=(hitsn*1/60);
    accn=Math.round((hitsn*1/(hitsn*1 + missn*1))*10000)/100;
    console.log('third ' +accn);
    rpm.innerHTML=rpmn;
    acc.innerHTML=accn + "%";
}
function move(){
    var myObject = document.getElementById("target");
    var x = 0;
    var y = 0;
    var speed = 10;
    var directionX = 1;
    var directionY = 1;
    var maxX = window.innerWidth - myObject.offsetWidth;
    var maxY = window.innerHeight - myObject.offsetHeight;
interval1 = setInterval(function() {
  x += speed * directionX;
  y += speed * directionY;
  myObject.style.left = x + "px";
  myObject.style.top = y + "px";

  if (x < 0 || x > maxX) {
    directionX *= -1;
  }

  if (y < 0 || y > maxY) {
    directionY *= -1;
  }
}, 30);}
function stop(){
    clearInterval(interval1);
}
function reset(){
    hits.innerHTML = 0;
    miss.innerHTML = 0;
    rpm.innerHTML = 0;
    timer.innerHTML = 0;
    acc.innerHTML = 0;
    counter=0;
    missed=0;
    clearInterval(interval1);
    clearInterval(interval2);
    document.getElementById("target").style.left=0+'px';
    document.getElementById("target").style.top=0+'px';
}