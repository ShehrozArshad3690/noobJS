// setInterval(Anime,2000);

// function Anime() {
//     alert("Hello Buddy")
// }



var a = 0;
let id=setInterval(move, 500);
function move() {
  a += 10;
  if (a == 200) {
    clearInterval(id);
  } else {
    // document.getElementById("main").style.marginLeft = a + "px";
    document.getElementById("main").style.width = a + "px";
  }
}


function stop() {
  clearInterval(id);
}