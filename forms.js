document.querySelector("#fname").addEventListener("focus", fox);
document.querySelector("#class").addEventListener("focus", fox1);
document.querySelector("#fname").addEventListener("blur", clearcolor);
document.querySelector("#class").addEventListener("blur", clearcolor1);
document.querySelector("#fname").addEventListener("input", inputon);
document.querySelector("#class").addEventListener("input", inputoff);

function fox() {
  document.querySelector("#fname").style.background = "aqua";
}
function clearcolor() {
  document.querySelector("#fname").style.background = "";
}
function fox1() {
  document.querySelector("#class").style.background = "aqua";
}
function clearcolor1() {
  document.querySelector("#class").style.background = "";
}
function inputon() {
  document.body.style.background = "yellow";
}
function inputoff() {
  document.body.style.background = "green";
}

document.querySelector("#menu").addEventListener("change", changes);
function changes() {
  document.write("Input Saved successfully");
}

document.querySelector("#fname").addEventListener("select", selectme);
function selectme() {
  document.write("name is selected");
}

document.querySelector("#form").addEventListener("submit",submitme);
function submitme(event) {
    event.preventDefault();
    var fname=document.querySelector("#fname").value;
    var clas=document.querySelector("#class").value;
    var country=document.querySelector("#menu").value;
    var final =document.querySelector("#result");
    final.innerHTML=fname+"<br>"+clas+"<br>"+country;
}

// document.querySelector("#fname").addEventListener("invalid",alert("Please fill in the name"));


