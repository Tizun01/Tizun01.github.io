
let countRoll = 0;

function check5star(temp, countRoll){
    if (temp <= 6 || countRoll == 90)
        return 1;
    else
        return 0;
}

function random5star(){
    let res = Math.floor(Math.random() * 2);
    rollItem.setAttribute("src",`./assests/video/5star/${fivestar[res].file}`)
}

function check4star(temp, countRoll){
    if (temp <= 20 || countRoll % 10 == 0)
        return 1;
    else
        return 0;
}

function random4star(){
    let res = Math.floor(Math.random() * 2);
    rollItem.setAttribute("src",`./assests/video/4star/${fourstar[res].file}`)
}

function random3star(){
    let res = Math.floor(Math.random() * 2);
    rollItem.setAttribute("src",`./assests/video/3star/${threestar[res].file}`)
}

function gacha(){
    let i = Math.floor(Math.random() * 100);
    countRoll++;
    if (check5star(i,countRoll)){
        random5star();
        onerollVid.setAttribute("src",`./assests/video/5starwish-single.mp4`);
    }
    else if (check4star(i,countRoll)){
        random4star();
        onerollVid.setAttribute("src",`./assests/video/4starwish-single.mp4`);
    }
    else {
        random3star();
        onerollVid.setAttribute("src",`./assests/video/3starwish-single.mp4`);
    }
    playVid(); 
}

oneroll.addEventListener("click", gacha);