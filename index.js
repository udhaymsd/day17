

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    var img = new Image(); 
var div = document.getElementById('countdown'); 
 
img.onload = function() { 
  div.appendChild(img); 
}; 
 
img.src = 'https://static.toiimg.com/thumb/msid-93477828,imgsize-21306,width-800,height-600,resizemode-75/93477828.jpg
    
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);