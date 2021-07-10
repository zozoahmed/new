var img = document.getElementsByTagName("img")[0];
var arrImg = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
var counter = 0;
function Next(){
    if(counter >=arrImg.length-1){ 
         counter=-1;
    }
    counter++;
    return setImg();
}
function Prev(){
   if(counter <=0){
       counter = arrImg.length;
   }
   counter--;
   return setImg();
}
var go;
function SlideShow(){
    if(counter >=arrImg.length-1){ 
        counter=-1;
   }
   counter++;
   go = setInterval(function(){
      (setImg());
      counter++;
   },1000)
   
}
function Stop(){
    clearInterval(go);
}
function setImg(){
    return img.setAttribute("src","img/"+arrImg[counter]);
}