document.querySelector("#inner").addEventListener("click",function () {
    this.style.background="green";
})
document.querySelector("#outer").addEventListener("click",function () {
    this.style.background="yellow";
})


document.body.addEventListener("click",abc);
function abc() {
    document.body.style.background="red";
}

document.body.addEventListener("mouseenter",rm);

function rm() {
    document.body.removeEventListener("click",abc)
}