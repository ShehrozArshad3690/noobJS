// document.getElementById("header").onclick=change;

document.getElementById("header").addEventListener("mouseenter", change);
document.getElementById("header").addEventListener("click", function () {
//   document.getElementById("header").style.background = "yellow";
  this.style.background = "yellow";
});
function change() {
  document.getElementById("header").style.background = "green";
}