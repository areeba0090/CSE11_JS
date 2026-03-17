const result=document.getElementById("para");
result.innerHTML="Hello  World";
result.title="myname";
const x=document.getElementsByClassName("p1");  //Array created here
console.log(x);
x[0].innerHTML="Areeba";
x[1].innerHTML="Alam";
x[2].innerHTML="Female";
// //returns a NodeList
const result2=document.getElementsByTagName("p");   //Creates Array
result2[2].innerHTML="this is a pet";
result2[1].style.color="blue";    //for CSS use .style.propertyname
result2[1].innerText="my paragraph";
const test=document.querySelector("ul li:nth-child(3)");  //Reads very first class
test.style.background="green";
test.style.padding="10px";

const test2=document.querySelectorAll("ul li");   //Advantage of Query:Single statement for all the selectors
for(x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10px";
    test2[x].style.color="blue";
}

