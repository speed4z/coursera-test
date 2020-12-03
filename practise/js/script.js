// var x;
// console.log(x);

// if(x==undefined){
//     console.log("x is undefined")
//     x=6;
//     console.log(x+" is x");
// }

// /****False statements ****/
// if (false || null || undefined || 0 || "" || NaN) {
// console.log("something is true!")
// }
// else {
//     console.log("All false")
// }

// /****true statements ****/
// if(true && 1 && "hello" && -1 && "false" && "good"){
//     console.log("All is true!")
// }




// /*** Curly braces position ***/
// function a()
// {
//     return
//     {
//         name:"A"
//     };
// }

// function b() {
//     return {
//         name:"B"
//     };
// }

// console.log(a());
// console.log(b());




// /*** For loop ***/
// var sum=0;
// for(var i=0;i<10;i++){
//     sum += i;
// }
// console.log("sum total is: "+sum);


// /*** new object ***/
// var company = new Object();
// company.name="Facebook";
// company.ceo= new Object();
// company.ceo.fname="Mark";
// company.ceo.favColor="Blue";
// company["stock price"]="110";

// console.log(company);




// /**** create new objects literals****/
// var facebook = {
//     name:"Facebook",
//     ceo:{
//         firstName:"Mark",
//         favColor:"blue"
//     },
//     "$stock price":110
// };

// console.log(facebook);

//Functions are First-class Data Types
//Functions are OBJECTS

// function makeMultiplier(multiplier){
//     var myFunc = function (x){
//         return multiplier*x;
//     };
//     return myFunc;
// };

// var triple = makeMultiplier(3);
// console.log(triple(23));

// var double = makeMultiplier(2);
// console.log(double(43));


// //passing function as arguments
// function doOperationOn(x,operation){
//     return operation (x);
// };
// var result = doOperationOn(45, triple);
// console.log("do operation "+result);



// /***Pass by value ***/
// var a = 7;
// var b = a;
// console.log("a: "+a);
// console.log("b: "+b);

// b=5;
// console.log("after b update:");
// console.log("a :"+a);
// console.log("b :"+b);

// /***Pass by reference ***/
// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x=5;
// console.log("after b update");
// console.log(a);
// console.log(b);



// //Pass by reference vs value
// function changePrimitive(primValue){
// ..........
// };


// //Function constructors
// function Circle(radius){
//     this.radius=radius;
//             // this.getArea = function() {
//             //     return Math.PI * Math.pow(this.radius, 2);
//             // };
// }


// //Prototype
// Circle.prototype.getArea = function() {
//     return Math.PI * Math.pow(this.radius, 2);
// };


// var myCircle = new Circle(10);  //new object
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);  //new object
// console.log(myOtherCircle);
// console.log(myOtherCircle.getArea());


// //ARRAYS

// var array = new Array();
// array[0]="abc";
// array[1]=4;
// array[2]=function (name){console.log("Name is :"+name)};
// array[3]={course : "html,css,js"};
// console.log(array);
// array[2]("hinata");
// array[2](array[0]);
// array[2](array[3].course);


//Short hand array creation

// var names = ["shard","rohit","atharv","shubh"];
// console.log(names);

// // var names = [
// //     {name : "yaakov"},
// //     {name : "John"},
// //     "Joe"
// // ];
// // console.log(names);

// names[100]="joe";

// for (var i=0;i<names.length;i++){
// console.log("Hello "+names[i]);
// };



// var myObj = {
//     name: "Yaakov",
//     course: "html/css/js",
//     platform:"coursera"
// };

// for (var prop in myObj){
//     console.log(prop + " : "+myObj[prop]);
// };

// var names2 = ["shard","rohit","atharv","shubh"];

// names2.greetings = "HI";

// for (var name in names2){
//     console.log("Hello "+ names2[name]);
// };


// //Closures
// function makeMultiplier (multiplier){
//     function b(){
//         console.log("Multiplier is :"+multiplier);
//     };
//     b();
//     return (
//         function (x){
//             return multiplier * x;
//         }
//     );
// };

// var double = makeMultiplier(2);
// console.log(double(10));   // its own exec env



// //Immediately Invoked Function Expression

// (function (name) {
//     console.log("Hello "+ name);
// })("coursera!");






/********* WEEK 5  *********/

// //DOM Manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);




//EVENT HANDLING
document.addEventListener("DOMContentLoaded",
function (event){

    function sayHello(event){
        this.textContent = "Said it!";
        var name = document.getElementById("name").value;
        var message = "<h2>Hello " + name + "!</h2>";
    
    //document.getElementById("content").textContent = message;
    
    document.getElementById("content").innerHTML = message;
    
    if (name === "student"){
        var title = document.querySelector("#title").textContent;
        title+= " & lovin it!";
        document.querySelector("h1").textContent = title;
    }    
    };       
    //Unobstrusive event binding
    document.querySelector("button")
    .addEventListener("click",sayHello);
    
    document.querySelector("body").addEventListener("mousemove",
        function(event){
                if (event.shiftKey === true){                    
            console.log("x: "+event.clientX);
            console.log("y: "+event.clientY);
            };
        }
    );


}
);


        
  

