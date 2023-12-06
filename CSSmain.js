var element;

// element=document.querySelector("#header").removeAttribute("style");
// element=document.querySelector(".abc").removeAttribute("style");


element=document.querySelector("#header").style.color="yellow";
element=document.querySelector("#header").style.border;
console.log(document.querySelector("#header").style.color);

console.log(element);

// document.querySelector("#header").className="saman";
document.querySelector("#header").className="saman abc";
console.log(document.querySelector("#header").className);

document.querySelector("#header").classList="sdfsdf saman dfsdf dsfsdf";
document.querySelector("#header").classList.add("abc","pposd");
document.querySelector("#header").classList.remove("abc","sdfsdf");
console.log(document.querySelector("#header").classList);




function change(){
    document.querySelector("#content").classList.toggle("shehroz");
}

console.log(document.querySelector("#header").classList.length);

// both of these lines give same result
console.log(document.querySelector("#header").classList[0]);
console.log(document.querySelector("#header").classList.item(1));

console.log(document.querySelector("#content").classList);
console.log(document.querySelector("#content").classList.contains("saman"));
console.log(document.querySelector("#content").classList.contains("shehroz"));