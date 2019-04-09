window.onload = function(){
    document.getElementById("text-area").value = BLANK;
    let val = document.getElementById("animation").value;
    console.log(val);
};
// document.getElementById("animation").onchange= function(){
//     let val = document.getElementById("animation").value;
//     console.log(val);
// };
// function change(){
//     let val = document.getElementById("animation").value;
//     console.log(val);
//     if(val === "Exercise"){
//         var defaults = ANIMATIONS[val].split("=====\n");
//         document.getElementById("text-area").value =  defaults[0];
//     }else if(val === "Juggler"){
//         document.getElementById("text-area").value =  ANIMATIONS[val];
//     }else if(val === "Bike"){
//         document.getElementById("text-area").value =  ANIMATIONS[val];
//     }else if(val === "Dive"){
//         document.getElementById("text-area").value =  ANIMATIONS[val];
//     }
// }
var myVar;

function turbo () {
    if(document.getElementById("turbo").checked){
       myVar= setInterval(again, 50);
    }else{
        console.log("clear");
        myStopFunction();
        start();
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
    console.log("soem");
        document.getElementById("stop").disabled=true;
        document.getElementById("start").disabled = false;
    clearInterval(myVar);
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
// <option value="Tiny">Tiny</option>
//         <option value="Small">Small</option>
//         <option value="Medium" selected="selected">Medium</option>
//         <option value="Large">Large</option>
//         <option value="Extra Large">Extra Large</option>
//     <option value="XXL">XXL</option>
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
// console.log("  o\n" +
//     " /#\\\n" +
//     " _|_\n" +
//     "=====\n" +
//     " \\o/\n" +
//     "  #\n" +
//     "_/ \\_\n");

   // function   drop() {


// }