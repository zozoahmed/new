var body = document.documentElement.children[1];
var div = document.getElementsByTagName("div")[0];
div.addEventListener("click",function(){
   var copydiv = div.cloneNode(true);
    var red = Math.floor(Math.random()*255); 
    var green = Math.floor(Math.random()*255); 
    var blue = Math.floor(Math.random()*255); 
    var color = "rgb("+red+","+green+","+blue+")";
    copydiv.style.backgroundColor = color;
    body.append(copydiv);
})