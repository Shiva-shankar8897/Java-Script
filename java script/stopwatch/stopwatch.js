let count=0;
let timer;
 function start(){
    timer=setInterval(() =>{
        count+=1;
        document.getElementById("seconds").innerHTML=count%60;
        document.getElementById("minutes").innerHTML=parseInt(count/60)%60;
        document.getElementById("hours").innerHTML=parseint(count/3600);
    },1000);
}
function stop(){
    clearInterval(timer)
}
function reset(){
    count=0;
    clearInterval(timer)
    document.getElementById("seconds").innerHTML=0;
    document.getElementById("minutes").innerHTML=0;
    document.getElementById("hours").innerHTML=0;

}

