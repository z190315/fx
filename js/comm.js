/*左侧列表栏*/ 
$(document).ready(function(){
    var xb=document.getElementsByClassName("t-form");
    xb[0].style.display="block";
    xb[1].style.display="none";
    xb[2].style.display="none";
    xb[3].style.display="none";
    xb[4].style.display="none";
    xb[5].style.display="none";
    xb[6].style.display="none";
    jp.onclick=function(){
        xb[0].style.display="block";
        xb[1].style.display="none";
        xb[2].style.display="none";
        xb[3].style.display="none";
        xb[4].style.display="none";
        xb[5].style.display="none";
        xb[6].style.display="none";
    }
    hcp.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="block";
        xb[2].style.display="none";
        xb[3].style.display="none";
        xb[4].style.display="none";
        xb[5].style.display="none";
        xb[6].style.display="none";
    }
   jdkz.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="none";
        xb[2].style.display="block";
        xb[3].style.display="none";
        xb[4].style.display="none";
        xb[5].style.display="none";
        xb[6].style.display="none";
    }
    lvdj.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="none";
        xb[2].style.display="none";
        xb[3].style.display="block";
        xb[4].style.display="none";
        xb[5].style.display="none";
        xb[6].style.display="none";
    }    
    mp.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="none";
        xb[2].style.display="none";
        xb[3].style.display="none";
        xb[4].style.display="block";
        xb[5].style.display="none";
        xb[6].style.display="none";
    }    
    qz.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="none";
        xb[2].style.display="none";
        xb[3].style.display="none";
        xb[4].style.display="none";
        xb[5].style.display="block";
        xb[6].style.display="none";
    }  
    lxyc.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="none";
        xb[2].style.display="none";
        xb[3].style.display="none";
        xb[4].style.display="none";
        xb[5].style.display="none";
        xb[6].style.display="block";
    }   
});
/*机票列表*/
$(document).ready(function(){
    var xb=document.getElementsByClassName("second-form");
    xb[0].style.display="block";
    xb[1].style.display="none";
    xb[2].style.display="none";
    xb[3].style.display="none";
    gn.onclick=function(){
        xb[0].style.display="block";
        xb[1].style.display="none";
        xb[2].style.display="none";
        xb[3].style.display="none";
    }
    gj.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="block";
        xb[2].style.display="none";
        xb[3].style.display="none";
    }
    gnt.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="none";
        xb[2].style.display="block";
        xb[3].style.display="none";
    }
    gjt.onclick=function(){
        xb[0].style.display="none";
        xb[1].style.display="none";
        xb[2].style.display="none";
        xb[3].style.display="block";
    }
});
/*酒店客栈
window.onmousedown=function(){
    var xa=document.getElementsByClassName("second-form");
    xa[0].style.display="block";
    xa[1].style.display="none";
    xa[2].style.display="none";
    jd.onclick=function(){
        xa[0].style.display="block";
        xa[1].style.display="none";
        xa[2].style.display="none";
    }
    kz.onclick=function(){
        xa[0].style.display="none";
        xa[1].style.display="block";
        xa[2].style.display="none";
    }
    tg.onclick=function(){
        xa[0].style.display="none";
        xa[1].style.display="none";
        xa[2].style.display="block";
    }
}*/
/*var i=0;
var LIWIDTH=800;
var DURATION=78;
var LICOUNT=7;
var ulImgs=document.getElementById("ul-imgs");
function moveTo(to){
    if (to==undefined) {
        to=i+7;
    }
    if (i==0) {
        if (to>i) {
            ulImgs.className="transition";
        } else {
            ulImgs.className="";
            ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
            setTimeout(function(){
                moveTo(LICOUNT-7);
            },100);
            return; 
        }
    }
    i=to;
    ulImgs.style.marginLeft=-i*LIWIDTH+"px";
    if(i==LICOUNT){
        i=0;
        setTimeout(function(){
            ulImgs.className="";
            ulImgs.style.marginLeft=0;
        },DURATION)
    }
}
var btnLeft=document.getElementById("btn-left");
var btnRight=document.getElementById("btn-right");
var canClick=true;
btnRight.onclick=function(){
    move(7)
}
btnLeft.onclick=function(){
    move(-7);
}*/