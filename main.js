var element;

element=document.getElementById("content").innerText;
element=document.getElementById("header").innerHTML;
element=document.getElementById("header").getAttribute("class");
element=document.getElementById("header").getAttributeNode("id");
element=document.getElementById("header").attributes;
element=document.getElementById("header").attributes[0];
element=document.getElementById("header").attributes[1].value;
element=document.getElementById("header").attributes[1].name;

console.log(element);

document.getElementById("footer").innerText="abcd124@gmail.com";
document.getElementById("footer").innerHTML="<b>shehrozarshad233@gmail.com</b>";
document.getElementById("header").setAttribute('class','html343@gmail.com');
document.getElementById("header").attributes[1].value="Shehrozarshad@gmail.com";
document.getElementById("header").removeAttribute("style");
document.getElementById("header").removeAttribute("class");

console.log(document.getElementById("header").getAttribute("class"));

// This is querySelector and querySelectorAll methods example

document.querySelector("#header").innerHTML="<h1>Wow</h1>";

// console.log(document.querySelector(".list"));
// console.log(document.querySelectorAll(".list"));
// console.log(document.querySelectorAll(".list")[1].innerText);
console.log(document.querySelectorAll("ul")[1].innerHTML);
