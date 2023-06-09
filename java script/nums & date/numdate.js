//alert("shanku")

//roundind a number
const num=26.35;
console.log(Math.round(num));
const num1=26.53;
console.log(Math.round(num1));
const sum=num+num1;
console.log(sum);
console.log(Math.round(sum));

//ceil
console.log(Math.ceil(num));
console.log(Math.ceil(num1));
console.log(Math.ceil(sum));

//floor
console.log(Math.floor(num));
console.log(Math.floor(num1));
console.log(Math.floor(sum));

//power
console.log(Math.pow(2,4));
console.log(Math.pow(9,3));
console.log(Math.pow(5,2));
console.log(Math.pow(10,1));

//square root
console.log(Math.sqrt(26));
console.log(Math.sqrt(263));

//absolute
const a=26;
const b=63;
const c=a-b;
console.log(Math.abs(c));
const d=b-a;
console.log(d);

//max & min 
const rank=Math.max(26,63,34,78,87,93);
console.log(rank);
const rank1=Math.min(26,63,34,78,87,93,2.6);
console.log(rank1);

//tofixed
const ss=263.234516789345;
console.log(ss.toFixed(2));
console.log(ss.toFixed(4));
console.log(ss.toFixed(5));
console.log(ss.toFixed(8));

//random
const lottery=Math.random();
console.log("random id",lottery*100);

//number
const ne="26";
const old="63";
console.log("string format is:",ne + old);
console.log("numer format is:",Number(ne)+Number(old));

var r=10;
var s=20;
var t="263";
var u=30;
var z="40";
console.log("string format is:",r+s+t+u+z);
console.log("number format is:",r+s+Number(t)+u+Number(z));

var age=prompt("enter your age:");
console.log(typeof age,age);
var age1=Number(prompt("enter your age1:"));
console.log(typeof age1,age1);

//pareseint & parsefloat

const rate=263.236;
console.log("int value is:",parseInt(rate));
console.log("float value is:",parseFloat(rate));
console.log("value is:",rate)
















//Date methods
const today=new Date();
console.log("today date is:",today);

const start=new Date(0);
console.log("starting date js:",start);

const currentms=today.getTime();
console.log("today ms is:",currentms);

const milliSeconds=24*60*60*1000;
console.log("ms per day is:",milliSeconds);
const first=new Date(milliSeconds*1)
console.log("ms first day is:",first);
const five=new Date(milliSeconds*5)
console.log("ms five day is:",five);
const ten=new Date(milliSeconds*10)
console.log("ms ten day is:",ten);

const coupon=new Date(currentms+milliSeconds);
console.log("coupon is valid till:",coupon);

console.log("completed ms from 1970 is:",today.getTime());
console.log("current year is:",today.getFullYear());
console.log("current month is:",today.getMonth());
console.log("current date is:",today.getDate());
console.log("current day is:",today.getDay());
console.log("current hour is:",today.getHours());
console.log("current minutes is:",today.getMinutes());
console.log("current sec is:",today.getSeconds());
console.log("current ms is:",today.getMilliseconds());











