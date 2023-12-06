var a = document.querySelector("#inner");
// var b=document.querySelector("#abc");                //returns false because inner has no id abc
var b=document.querySelector("#test");                  //returns true because inner has a test id
console.log(a.contains(b));


var c=document.querySelector("#main");                  
var d=document.querySelector("#abc");                   //returns false because there is no id abc in child or grandchild
// var d=document.querySelector("#test");               //returns true because there is a id abc in child or grandchild
console.log(c.contains(d));