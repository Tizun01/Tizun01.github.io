var song = document.getElementById("audio"); 
var playBtn = document.querySelector(".play-inner");
var prevBtn = document.querySelector(".prev-inner");
var nextBtn = document.querySelector(".next-inner");

var range = document.querySelector(".range");

var durationTime = document.querySelector(".remaining");
var totalTime = document.querySelector(".duration");

let isPlaying = true;
let indexSong = 0;

const music = ["đen đá không đường.mp3", "anh nhà ở đâu thế.mp3", "em bé.mp3"];

displayTimer();

song.addEventListener("ended", nextSong)

let timer;

playBtn.addEventListener("click",playPause);

function playPause() { 

    if (isPlaying){
        song.play();
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        isPlaying = false;
        timer = setInterval(displayTimer, 500);
    }   
    else {
        song.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-play">`;
        isPlaying = true;
        clearInterval(displayTimer, 500);
    }
}

song.setAttribute("src", `./assets/music/amee/${music[indexSong]}`);

nextBtn.addEventListener("click",nextSong);

prevBtn.addEventListener("click",prevSong);

function nextSong() {

    indexSong++;
    if (indexSong >= music.length) {
        indexSong = 0;
    }
    song.setAttribute("src", `./assets/music/amee/${music[indexSong]}`);
    song.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

function prevSong() {

    indexSong--;
    if (indexSong < 0) {
        indexSong = music.length-1;
    }
    song.setAttribute("src", `./assets/music/amee/${music[indexSong]}`);
    song.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

function displayTimer(){
    const   {duration, currentTime} = song;
    range.max = duration;
    range.value = currentTime;

    totalTime.textContent = formatTime(currentTime);

    if (!duration){
        durationTime.textContent="0:00";
    }
    else{
        durationTime.textContent = formatTime(duration);
    }
}

function formatTime(number){
    const minute = Math.floor(number/60);
    const second = Math.floor(number - minute * 60);
    return `${minute <10 ? "0" + minute : minute}:${second <10 ? "0" + second : second}`;
}

range.addEventListener("change", changeBar);

function changeBar() {
    song.currentTime = range.value;
}