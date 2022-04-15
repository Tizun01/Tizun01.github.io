var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var book = document.querySelector("#book");

var paper1 = document.querySelector("#p1");
var paper2 = document.querySelector("#p2");
var paper3 = document.querySelector("#p3");
var paper4 = document.querySelector("#p4");
var paper5 = document.querySelector("#p5");
var paper6 = document.querySelector("#p6");
var paper7 = document.querySelector("#p7");
var paper8 = document.querySelector("#p8");
var paper9 = document.querySelector("#p9");
var paper10 = document.querySelector("#p10");
var paper11 = document.querySelector("#p11");

prev.addEventListener("click", goPrevPage);
next.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 11;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prev.style.transform = "translateX(-400px)";
    next.style.transform = "translateX(0)";
    prev.style.opacity= "1";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    next.style.opacity= "0";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                break;    
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                closeBook(false);
                break;
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 11;
                prev.style.opacity= 0;
                next.style.opacity= 1;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 10;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 9;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 8;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 7;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 6;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 5;
                break;
            case 9:
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 4;
                break;
            case 10:
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 3;
                break;
            case 11:
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 2;
                break;
            case 12:
                openBook();
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 1;
                break;
        }

        currentLocation--;
    }
}