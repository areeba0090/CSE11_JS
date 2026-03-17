//get attribute
const element=document.getElementById("MyH1");
let text=element.getAttribute("class");  //to retrieve the value of the particular element
document.getElementById("demo").innerHTML=text;
//setAttribute:which attribute to set and what is its value (two paramenters)
function myFunction()
{
    document.getElementById("MyH1").setAttribute("class","democlass"); 
    alert("Attribute added successfully");
}
