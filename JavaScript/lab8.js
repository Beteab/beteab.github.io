//Exercise1
String.prototype.filter = function(string){
    const stripped = this.split(string).join('');
    return stripped;
};
console.log("This house is not nice!".filter('not'));

//Exercise2
Array.prototype.bubbleSort = function () {


    for (let i = 0; i < this.length-1; i++)
    for (let j = 0; j < this.length-i-1; j++)
    if (this[j] > this[j+1])
    {
        // swap arr[j+1] and arr[i]
        let temp = this[j];
        this[j] = this[j+1];
        this[j+1] = temp;
    }
    return this;
};
console.log([6,4,0, 3,-2,1].bubbleSort());

//Exercise 3
function Person(na,sub) {
    this.name =na;
    this.subject = sub;
}
Person.prototype.teach = function () {
   return (this.name +"is now teaching" +this.subject)
};
 const Teacher = new Person("Beteab " , "wap");
console.log(Teacher.teach());

//Exercise 3 second method
const Person1 = {
    name:"Beteab",
    subject:"WAA",
    teach:function () {
        return (this.name +"is now teaching" +this.subject)
    }
};

const Teacher1 = Object.create(Person1);
console.log(Teacher1.teach());

//Exercise 4

function Person3() {
    this.name="";
    this.age = 0;


}
Person3.prototype.greeting = function () {
    return ("Greetings, my name is "+ this.name+"and I am\n" +
        this.age +" years old")
};
Person3.prototype.salute = function () {
    return("Good morning!, and in case I dont see you,\n" +
        "good afternoon, good evening and good night!")
};