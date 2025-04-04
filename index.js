const timerEl=document.getElementById("timer");
const startEl=document.getElementById("start";
const stopEl=document.getElementById("stop");
const resetEl=document.getElementById("reset");

let startTimer=0;
let elapsedTimer=0;
let timeInterval;

function startTimer(){
    startTimer=Date.now()-elapsedTimer;

    timeInterval=setInterval(()=>{
        elapsedTimer=Date.now()-startTimer;
        timerEl.textContent=
    },10);
}
function formatTime(){
    const milliseconds=Math.floor((elapsedTimer%1000)/10);
    const seconds=Math.floor(elapsedTimer%(1000*60)/1000);
    const minutes=Math.floor(elapsedTimer%(1000*60*60)/(1000*60));
    const hours=Math.floor(elapsedTimer/(1000*60*60));
    return
    (hours?(hours>9?hours:"0"+hours):"00")
    +":"+
    (minutes?(minutes>9?minutes:"0"+minutes):"00")
    +":"+
    (seconds?(seconds>9?seconds:"0"+seconds):"00")
    +":"+
    (milliseconds?(milliseconds>9?milliseconds:"0"+milliseconds)
);
}

startEl.addEventListener("click",startTimer)
