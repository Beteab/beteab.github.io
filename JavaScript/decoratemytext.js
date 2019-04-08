
window.onload= function(){
    document.getElementById("b1").onclick=function(){
        var x=document.getElementById("ta1");
        var font =parseFloat(window.getComputedStyle(x,null).getPropertyValue('font-size'));
        var combined = font + "pt";
        if(combined!="24pt") {
            document.getElementById("ta1").style.fontSize = "29pt";
        }else{
            document.getElementById("ta1").style.fontSize=font;
        }
    };
    document.getElementById("c1").onchange=function(){

            document.body.style.backgroundImage='url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)';
            //document.getElementsByTagName("body")=url

    }
};

