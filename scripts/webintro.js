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