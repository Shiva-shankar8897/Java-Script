let telugu=Number( document.getElementById("t").value);
let hindi=Number(document.getElementById("h").value);
let english=Number(document.getElementById("e").value);
let  maths=Number( document.getElementById("m").value);
let science=Number(document.getElementById("sc").value);
let social=Number( document.getElementById("s").value);
function Total(){
    let totalMarks= Number(telugu+hindi+english+maths+science+social);
    document.getElementById("tm").innerHTML= " Total Marks:"+ totalMarks;
    console.log(totalMarks)
}

function percent(){
    let totalMarks=Number(telugu+hindi+english+maths+science+social);
    let percent= totalMarks/600 * 100 ;
 document.getElementById("pr").innerHTML= " percent:"+ percent;
console.log(percent)
}

function grade(){
    const telugu=Number( document.getElementById("t").value);
    const hindi=Number(document.getElementById("h").value);
    const english=Number(document.getElementById("e").value);
    const  maths=Number( document.getElementById("m").value);
    const science=Number(document.getElementById("sc").value);
    const social=Number( document.getElementById("s").value);
    if(percent>=90 && percent<=100){
        console.log("A+ Grade");
    }else if(percent>=80 && percent<=90){
        console.log("A Grade"); 
    }else if(percent>=70 && percent<=80){
        console.log("B Grade"); 
    }else if(percent>=60 && percent<=70){
        console.log("C Grade"); 
    }else if(percent>=50 && percent<=60){
        console.log("D Grade"); 
    }else if(percent>=40 && percent<=50){
        console.log("E Grade"); 
    }else if(percent<=40){
        console.log("Failed");
    }else{
        console.log("enter a valid percent:")
    }
    const grade= totalMarks/600 * 100
    document.getElementById("gr").innerHTML= " grade:"+ grade;
    console.log()
}