function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}
//--------------------------------------------------
//finding max
function max(a, b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));
//----------------------------------------------------
//finding max of three

function maxOfThree(a,b,c){
    return max(max(a,b),c);
}

console.log("Expected output of maxOfThree(20,10, 30) is 30  " + myFunctionTest(30, function () {
    return maxOfThree(20, 10, 30);
}));
//----------------------------------------------------
//isvowel
function isvowel(x){
    if(x==="a" || x==="e" || x==="i" || x==="o" || x==="u"){
        return true;
    }else{
        return false;
    }
}

console.log("Expected output of isVowel(r) is (false)  " + myFunctionTest(false, function () {
    return isvowel("r");
}));
//----------------------------------------------------
//summing
let summation=0;
function sum(arr){
    let reducer=(a,b)=>a+b;
    return arr.reduce(reducer, 0)
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));
//----------------------------------------------------
//multiply

function multiply(array){
    return array.reduce(((a,b)=>a*b), 1);
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));
//----------------------------------------------------
//reversing

function reverse(str){
    return str.split("").reverse().join("");
}
//console.log(revese("makushu"));
console.log("Expected output of reverse('Henock') is kconeH  " + myFunctionTest("kconeH", function () {
    return reverse('Henock');
}));
//----------------------------------------------------
//finding the longest word
function findLongestWord(ar){
    return ar.reduce((prev,next)=>(prev.length>next.length)? next.length : prev.length);
}
console.log(findLongestWord(['henock','beteab','nah']));
console.log("Expected output of reverse('Henock') is kconeH  " + myFunctionTest("kconeH", function () {
    return reverse('Henock');
}));
//----------------------------------------------------
//filter

function filterLongWords(array, i){
    return array.filter(a=>a.length>i);
}
console.log(filterLongWords(['henock','beteab','nah'], 3));
//----------------------------------------------------
//map
function mapp(array){
    return array.map(x=>x*10);
}
console.log(mapp([1,2,3]));

//----------------------------------------------------
//filter
function filtering(array){
    return array.filter(x=>x==3);
}
console.log(filtering([1,2,3,3]));
//----------------------------------------------------
//reduce
function reduce(array){
    return array.reduce((a,b)=>a*b,1);
}
console.log(reduce([1,2,3]));