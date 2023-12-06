var a=setTimeout(function () {
    document.getElementById("main").style.width="500px";
},3000);

// function Anime() {
//     alert("Hello");
// }

function stop(){
    clearInterval(a);
}