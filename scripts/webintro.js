function myFunction(){
let text; 
let person = prompt ("Please enter your name");
if(person == null || person == ""){
  text = "Have fun looking around";
  
}
else {
  text = " Hello " + person + " Have fun looking around!" ;

}
document.getElementById("name").innerHTML=text;

}



