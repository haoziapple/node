var oBanner = document.getElementById("index_banner_ul");
var aBannerLi = oBanner.getElementsByTagName("li");
var oNav = document.getElementById("index_banner_nav");
var aNavLi = oNav.getElementsByTagName("li");
var oBtn = document.getElementById("index_banner_btn");
var oPrev = document.getElementById("index_banner_prev");
var oNext = document.getElementById("index_banner_next");
var oBannerBox = document.getElementById("index_banner");
var i = 0;
aBannerLi[0].style.opacity = 1;
aBannerLi[0].style.zIndex = 1;
var timer = setInterval(move,3000);//filter 
for(var n = 0; n < aBannerLi.length; n++){
	aBannerLi[n].index = n;
	aBannerLi[n].onmouseover = function(){
		console.log(this.index);
	}
}
function move(){
	clearInterval(timer);
	i++;
	for(var j = 0; j < aBannerLi.length; j++){
		aBannerLi[j].style.zIndex = 0;
		startMove(aBannerLi[j],{"opacity":0});
	}
	for(var k = 0; k < aNavLi.length; k++){
		aNavLi[k].className = "";
	}
	if(i>=aBannerLi.length){
		i = 0;
	}				
	aNavLi[i].className = "cur";
	aBannerLi[i].style.zIndex = 1;
	startMove(aBannerLi[i],{"opacity":100},clear);
}
function clear(){
	timer = setInterval(move,3000);
}

for(var m = 0; m < aNavLi.length; m++){
	aNavLi[m].index = m;
	aNavLi[m].onclick = function(){
		i = this.index - 1;
		move();
	}
}			
oPrev.onclick = function(){
	if(i==0){
		i=aBannerLi.length-2;
	}else{
		i = i - 2;
	}
	move();
}
oNext.onclick = function(){
	move();
}			
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
		}
		else{
			return getComputedStyle(obj,false)[attr]
			}				
}
function startMove(obj, json, fnEnd)
{
    var MAX=18;
    clearInterval(obj.timer); 
    obj.timer=setInterval(function (){			 
        var bStop=true;			 
        for(var name in json)
        {
            var iTarget=json[name];			 
            if(name=='opacity')
            {
                var cur=Math.round(parseFloat(getStyle(obj, name))*100); 
            }
            else
            {
                var cur=parseInt(getStyle(obj, name)); 

            }
            var speed=(iTarget-cur)/8; 
 
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
 
            if(Math.abs(speed)>MAX)speed=speed>0?MAX:-MAX;
 
            if(name=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100; //ff chrome
            }
            else
            {
                obj.style[name]=cur+speed+'px';
            }
            if(cur!=iTarget)
            {
                bStop=false;
            }
        }
        if(bStop)
        {
            clearInterval(obj.timer);
 
            if(fnEnd)
            {
                fnEnd();
            }
        }
    },80);
}	