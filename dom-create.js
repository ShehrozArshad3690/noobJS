//DOM creation methods

//used to insert html tags
console.log(document.createElement("p"));
console.log(document.createElement("h2"));
//used to insert text
console.log(document.createTextNode("Hello this is Bug!"));
console.log(document.createTextNode("Please fix me!"));
//used to insert comments
console.log(document.createComment("Bug has been fixed!"));
console.log(document.createComment("The site is ready to use."));

//DOM append methods

var a=document.createElement("h1");
var b=document.createTextNode("Warning!");
a.appendChild(b);                                       //this way we can append text with tags
document.querySelector("#main").appendChild(a);         //this way we can append tag & text with existing tags(div)
console.log(a);

var c="Dummy 2";
var test=document.querySelector("#main");
test.insertBefore(a,test.children[1]);