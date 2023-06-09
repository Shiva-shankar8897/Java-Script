//alert("shanku")
// if condition
var a=26;
var b=63;
if(a == b){console.log("true")}
if(a > b){console.log("true")}
if(a < b){console.log("true")}
if(a >= b){console.log("true")}
if(a <= b){console.log("true")}

// if else condition
if(a == b){
    console.log("condition is true, if block")
}else{
    console.log("condition is false, else block")
}
if(a > b){
    console.log("condition is true, if block")
}else{
    console.log("condition is false, else block")
}
if(a < b){
    console.log("condition is true, if block")
}else{
    console.log("condition is false, else block")
}
if(a >= b){
    console.log("condition is true, if block")
}else{
    console.log("condition is false, else block")
}
if(a <= b){
    console.log("condition is true, if block")
}else{
    console.log("condition is false, else block")
}

// else if condition
var percent=prompt("enter a value is:");
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

const date=new Date();
const day=date.getDay();
console.log(day);

//if else
if(day == 0){
    console.log("is a holiday");
}else{
    console.log("is a workingday");
}

//else if

if(day == 0){
    console.log("sunday is a holiday",day);
}else if(day == 1){
    console.log("monday is a workingday",day);
}else if(day == 2){
    console.log("tuesday is a workingday",day);
}else if(day == 3){
    console.log("wednesday is a workingday",day);
}else if(day == 4){
    console.log("thursday is a workingday",day);
}else if(day == 5){
    console.log("friday is a workingday",day);
}else{
    console.log("saturday is a weekoff",day);
}

























