window.onload = function(){
    document.getElementById("text-area").value = BLANK;
    let val = document.getElementById("animation").value;
    console.log(val);
};

var myVar , myVar2,myVar3;

function turbo () {
    if(document.getElementById("turbo").checked){
       myVar2= setInterval(again, 50);
    }else if (!document.getElementById("turbo").checked){
        console.log("clear");
        document.getElementById("start").disabled = false;
        clearInterval(myVar2);

    }
}

function start() {
    document.getElementById("stop").disabled=false;
    document.getElementById("start").disabled = true;
console.log( document.getElementById("stop").disabled);
    myVar = setInterval(again, 250);




}
document.getElementById("stop").onclick=stop();


    function stop() {
        clearInterval(this.myVar);

    console.log("soem");
        document.getElementById("stop").disabled=true;
        document.getElementById("start").disabled = false;

}
var x = 0;
function again(){

    let val = document.getElementById("animation").value;
    let defaults = ANIMATIONS[val].split("=====\n");

    if(x < defaults.length){
        document.getElementById("text-area").value =  defaults[x];
        x+=1;

    }else
        x=0;

}
function myStopFunction() {
    clearInterval(myVar);
}
function fontSizeChange() {
    let fon = document.getElementById("fontsize").value;

    if(fon === "Tiny"){
        document.getElementById("text-area").style.fontSize = "x-small";
    }else if(fon === "Small"){
        document.getElementById("text-area").style.fontSize="small";
    }else if(fon === "Medium"){
        document.getElementById("text-area").style.fontSize="medium";
    }else if (fon === "Large"){
        document.getElementById("text-area").style.fontSize="large";
    }else if (fon === "Extra Large"){
        document.getElementById("text-area").style.fontSize="x-large";
    }else{
        document.getElementById("text-area").style.fontSize="xx-large";
    }


}

