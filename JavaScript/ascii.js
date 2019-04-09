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
function start() {
    let val = document.getElementById("animation").value;
    let defaults = ANIMATIONS[val].split("=====\n");
    let x = 0;
    var myVar = setInterval(again, 250);



        function again(){
            if(x < defaults.length){
                document.getElementById("text-area").value =  defaults[x];
                x+=1;

            }else
                x=0

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