//if there is no parent then parentElement returns null but parentNode returns something

console.log("parentNode and parentElement");

console.log(document.querySelector("#outer").parentNode);           //returns the parent of outer (body)
console.log(document.querySelector("#inner").parentNode);           //returns the parent of inner (outer)
console.log(document.body.parentNode);                              //returns the parent of body (HTML)
console.log(document.querySelector("#main").parentNode);            //it returns something but not null due to no parent (document)

console.log(document.querySelector("#outer").parentElement);           //returns the parent of outer (body)
console.log(document.querySelector("#inner").parentElement);           //returns the parent of inner (outer)
console.log(document.body.parentElement);                              //returns the parent of body (HTML)
console.log(document.querySelector("#main").parentElement);             //returns null as no parent

//using this we can also change the color of parent

document.querySelector("#outer").parentElement.style.background="yellow";


//now by parent we traverse it children and childNodes

console.log("children and childNode");

console.log(document.querySelector("#inner").children);             //returns the children of inner div
document.querySelector("#inner").children[1].style.background="red";        //sets the color of number 1 index children of inner div
console.log(document.querySelector("#inner").children[1].innerHTML);        //inner html
console.log(document.querySelector("#inner").childNodes);           //it gives text node as well with html nodes while children method not

//firstchild and lastchild & firstElementChild and lastElementChild traversing of DOM

console.log("firstChild and lastChild");
console.log(document.querySelector("#inner").firstChild);
console.log(document.querySelector("#inner").lastChild);
console.log(document.querySelector("#inner").firstChild.innerHTML);         //returns inner html of first child that is undefined because of the text nodes(enter node)
console.log(document.querySelector("#inner").firstElementChild);
console.log(document.querySelector("#inner").lastElementChild);
console.log(document.querySelector("#inner").firstElementChild.innerHTML);      //returns the inner html value of first child

document.querySelector("#inner").firstElementChild.style.background="green";


//nextSibling and previousSibling traversing of DOM

console.log("Siblings traversing");

console.log(document.querySelector("#c").nextElementSibling);               //returns the value of next sibling 
console.log(document.querySelector("#c").previousElementSibling);           //returns the value of previous sibling
console.log(document.querySelector("#c").nextElementSibling.innerHTML);     //returns the inner html of next sibling
console.log(document.querySelector("#c").previousElementSibling.innerHTML);     //returns the inner html of previoius sibling

console.log(document.querySelector("#d").nextSibling);                  //returns the value of next sibling including all(text,space,comment,enter,html)
console.log(document.querySelector("#d").previousSibling);              //returns the value of previous sibling including all(text,space,comment,enter,html)

document.querySelector("#c").nextElementSibling.style.background="crimson";         //sets the value of next sibling
document.querySelector("#c").previousElementSibling.style.background="salmon";      //sets the value of previous sibling




