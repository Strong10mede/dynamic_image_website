var container = document.querySelector(".container");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.querySelectorAll(".thumbnail");

var backgroundImg = new Array(
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png",
)

let i=0;

next.onclick = () =>{
    if(i>=4){
        i=-1;
        thumbnail[4].classList.remove("active");
    }
    container.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
    thumbnail[i+1].classList.add("active");
    if(i>=0){
        thumbnail[i].classList.remove("active");
    }   
    i++;
}

prev.onclick = () =>{
    if(i<=0){
        i=5;
        thumbnail[0].classList.remove("active");
    }
    container.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
    thumbnail[i-1].classList.add("active");
    if(i<=4){
        thumbnail[i].classList.remove("active");
    }   
    i--;
}

