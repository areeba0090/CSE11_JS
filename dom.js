const result=document.getElementById("para");
result.innerHTML="Hello  World";
result.title="myname";
const x=document.getElementsByClassName("p1");
console.log(x);
//returns a NodeList
const result2=document.getElementsByTagName("p");
result2[2].innerHTML="this is a pet";
result2[1].style.color="blue";
result2[1].innerText="my paragraph";
const test=document.querySelector("p(3)");
test.style.background="green";
test.style.margin="10px";
test.style.color="blue";
const test1=document.querySelectorAll("ul li");
for(x in test1){
    test1[x].style.backgroundColor="green";
    test1[x].style.marginr="10px";
    test1[x].style.color="blue";
}

