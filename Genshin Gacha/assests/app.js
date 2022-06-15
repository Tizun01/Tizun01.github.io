var oneroll = document.querySelector(".one-roll")
var tenroll = document.querySelector(".ten-roll")
var onerollVid = document.getElementById("roll-screen-1roll")
var tenrollVid = document.getElementById("roll-screen-10roll")
var rollItem = document.getElementById("roll-item")
var content = document.querySelector(".container")

function returnItem(){
    onerollVid.style.display = "none";
    rollItem.style.display="flex";
    rollItem.play();
}

function returnBanner(){
    onerollVid.style.display = "none";
    rollItem.style.display="none";
    content.style.display = "block";
}

function playVid(){
    onerollVid.play();
    onerollVid.style.display = "flex";
    content.style.display = "none";
    onerollVid.addEventListener("ended", returnItem);
    rollItem.addEventListener("ended", returnBanner); 
}

oneroll.addEventListener("click", gacha);

function playVid10roll(){
    tenrollVid.play();
    tenrollVid.style.display = "block";
    content.style.display = "none";
    tenrollVid.addEventListener("ended", returnItem);
    rollItem.addEventListener("ended", returnBanner); 
}

tenroll.addEventListener("click", playVid10roll);