
const drumA = document.getElementById("A");
const audioA = new Audio('boom.wav');

drumA.addEventListener("click", ()=>{
    audioA.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyA"){
        audioA.play();
    }
})

////////////////////////////////////////////////////


const drumS = document.getElementById("S");
const audioS = new Audio('clap.wav');

drumS.addEventListener("click", ()=>{
    audioS.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyS"){
        audioS.play();
    }
})

//////////////////////////////////////////////////


const drumD = document.getElementById("D");
const audioD = new Audio('hihat.wav');

drumD.addEventListener("click", ()=>{
    audioD.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyD"){
        audioD.play();
    }
})

//////////////////////////////////////////////////


const drumF = document.getElementById("F");
const audioF = new Audio('kick.wav');

drumF.addEventListener("click", ()=>{
    audioF.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyF"){
        audioF.play();
    }
})

//////////////////////////////////////////////////


const drumG = document.getElementById("G");
const audioG = new Audio('openhat.wav');

drumG.addEventListener("click", ()=>{
    audioG.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyG"){
        audioG.play();
    }
})

//////////////////////////////////////////////////

const drumH = document.getElementById("H");
const audioH = new Audio('ride.wav');

drumH.addEventListener("click", ()=>{
    audioH.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyH"){
        audioH.play();
    }
})

////////////////////////////////////////////////////

const drumJ = document.getElementById("J");
const audioJ = new Audio('snare.wav');

drumJ.addEventListener("click", ()=>{
    audioJ.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyJ"){
        audioJ.play();
    }
})

////////////////////////////////////////////////////

const drumK = document.getElementById("K");
const audioK = new Audio('tink.wav');

drumK.addEventListener("click", ()=>{
    audioK.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyK"){
        audioK.play();
    }
})

//////////////////////////////////////////////////


const drumL = document.getElementById("L");
const audioL = new Audio('tom.wav');

drumL.addEventListener("click", ()=>{
    audioL.play();
})

document.addEventListener("keypress",(event) =>{
    if(event.code == "KeyL"){
        audioL.play();
    }
})
