//create an element
const heading=document.createElement("h2");
//get the parent
const bodytag=document.getElementsByTagName("body");
//add element at the position using append method 
bodytag[0].append(heading);
heading.innerText="hello";
heading.style.backgroundColor="red";



