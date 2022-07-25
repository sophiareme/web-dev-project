// this is a comment 


/*

this
 is 
 a
  comment 
  
  */

  var myName;

  // no spaces and cant start with a number (for vars)

  var a;
  a = 47;
  //console.log(a);
  //console.log(*this is a*);
  

  var b;
  b = a
  console.log("b is equal to:" + b);

  //assignment operator

  var c = 0;

  var myfirstname = "sophia";
  var mylastname = "reme";
  var num = "12";

  var number = 23; 

  var x = 15;
  var y = 90;
  var z = "pink";

  x = x + 1;
  y = y + 5;
  z = z + " coder";

  console.log(x);
  console.log(y);
  console.log(z);


var camper = "sophia";
var camper = "sandra";
console.log(camper);

let student = "sophia"
//let student = "sophia"
console.log(student);

const FAV_PET = "cats";
//FAV_PET = "dogs";

const SUM = 30 + 30;
const DIFFERENCE = 50-20;
const QUOTIENT = 44 / 12;
const PRODUCT =  8 * 10;
console.log(SUM);
console.log(DIFFERENCE);
console.log(QUOTIENT);
console.log(PRODUCT);

let newvar = 47;
newvar = newvar + 1;
//equivalent to...
newvar ++;
console.log(newvar);

newvar = newvar - 1;
//same as..
newvar--;

let v = 1;
v += 5;
console.log("this is v: " + v);

let s = 10
s-= 5;
console.log("this is s:" +5);

let m = 5;
m*= 2;
console.log("this is m:" + m);

let d = 10
d/= 2;
console.log("this is d: " + d);

var n = 26
if(n == 22) {
console.log("this number is 22");
}
console.log("this number is not 22");

if(n=22) {
  console.log("this number is  22");
} else {
  console.log("this number is not 22");
}

var n = 26;
if(n==22) {
  console.log("this number is 22");
} else if(n==26) {
  console.log("this number is 26");
} else {
  console.log("this number is neither 22 or 26");
}

if (n==22 || n == 23){
console.log("n is 22 or 23");
} else {
  console.log("n is neither 22 or 23");
}

var number = "47";

if(number == 47) {
  console.log("checked: this number is 47");
} else {
  console.log("checked: this number isnt 47");
}

console.log("number = " + number);
console.log("number is " + number + ". This is prime");



var_numChecck = 50;
if (num <= 40) {
  console.log(" num is less than or equal to 40");
} else if (number => 41) {
  console.log("num is greater than or equal to 41");
}

const PET = "cat";
if (PET === "bunny") {
  console.log("I own a bunny");
}else if (PET== "cat") {
  console.log("I own a cat");
} else if (PET === fish)
console.log ("I own a fish");


switch(PET) {
case "cat":
console.log("I own a cat");
  break;
case "bunny":
console.log("I own a bunny");
  break;
case "fish":
console.log("I own a fish")

}

const COUNTRY = "France";
switch(COUNTRY) {
case "Spain":
case "Italy":
case "Hungary":
 console.log("This country is in Europe");
  break;


case "Canada":
console.log ("This country is in N. America");
  break;
  default:
    console.log("This country is not in Europe ");

    // using the message multiple times is blockscope
} 

const ERRAND = "Going Shopping";
switch(ERRAND) {

case "Going to the dentist": {
   let message = "I hate going to the dentist";
   console.log(message);
     break;
}
   case "Going Shopping": {
     let message = "I love to shop";
     console.log(message);
       break;
   }
     case "Chores": { 
       let message = "I hate doing chores";
       console.log(message);
         break;
     }
       default: {
          console.log("No errands");
         break;

}
}

  // structure of a function
function myFunction(ERRAND) {
    //whatever
    console.log(ERRAND);

// ^^ on click then enter the function

// alert, confirm, prompt are the three pop up boxes
alert ("i am an alert box!!!");
var txt;
if(confirm("Press a button")) {
txt = "You pressed OK!";

} else {
  txt = "You pressed Cancel";
}
document.getElementById("demo").innerHTML = txt

let text;
let person = prompt ("Please enter your name:", "Sophia Reme");
if(person == null || person == "") {
  text = "User cancelled the prompt";
} else {
  text = " Hello " + person + "! How are you today?";
}
document.getElementById("demo").innerHTML = text;
} 
/*
var i = 0;
console.log("Starting Loop");
while (i < 10) {
  console.log("The number is " + i );
  i++;
}

console.log("End of Loop");
*/

var i = 10;
console.log(" Starting Loop");
do{
  console.log("The number is " + i);
  i--;
} while (i > 0);

var count;
console.log("Starting Loop");
for( count = 0; count < 10; count ++) {
  console.log("Current count: " + count);
}
console.log ("Loop Stopped");

