var main =document.querySelector("#main");
var image =document.querySelector("#img");

main.addEventListener("mousemove",function(details){
image.style.top= 1-details.y*0.04 +"px";
image.style.left= 1-details.x*0.04 +"px"; 


})