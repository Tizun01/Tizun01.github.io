var heart = document.querySelector(".left .heart")

heart.addEventListener("click",changeHeartColor);

let flagHeart = 1;

function heartActive(){
    heart.style.filter= "none";
    heart.style.transform = "scale(1.25)";
    flagHeart=0;
}

function heartDisable(){
    heart.style.filter= "grayscale(1)";
    heart.style.transform = "none";
    flagHeart=1;
}

function changeHeartColor(){
    if (flagHeart==1)
        heartActive();
    else{
        heartDisable();
    }
}

var profile = document.querySelector("#container .top-bar .profile")
var detail = document.querySelector("#container .top-bar .profile .sub-nav")
var move = document.querySelector("#container .top-bar .profile .move")

let flagOpen=1;

profile.addEventListener("click",openClose);

function openClose(){
    if (flagOpen==1){
        detail.style.opacity="1";
        flagOpen=0;
        move.innerHTML = `
        <i class="fa-solid fa-chevron-up"></i>
        `
    }
    else{
        detail.style.opacity="0";
        flagOpen=1;
        move.innerHTML = `
        <i class="fa-solid fa-chevron-down"></i>
        `
    }
}

var volume = document.querySelector(".volume");
var volumeBar = document.getElementById("volumeBar");

let flagVolume=0;

volume.addEventListener("click",changeVolume);

function changeVolume(){
    if (flagVolume==1){
        flagVolume=0;
        volume.setAttribute("src","./assets/image/furniture/volume-big.PNG");
        volumeBar.style.width = "100px";
        song.muted = false;
    }
    else{
        flagVolume=1;
        volume.setAttribute("src","./assets/image/furniture/volume-mute.PNG");
        volumeBar.style.width = "0px";
        song.muted = true;
    }
}
