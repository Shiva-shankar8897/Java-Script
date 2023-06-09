//alert("Hello, This is Shanku")

document.getElementById("main").style.color= "blue"
document.getElementById("h2").style.color= "blue"

a=26;
b=63;
sum= a+b;
console.log("sum of a and b :",sum)
document.getElementById("add").style.color= "blueviolet"
document.getElementById("add").innerHTML= "sum of a and b ="+ sum

sub= a-b;
console.log("sub of a and b :",sub)
document.getElementById("sub").style.color= "rgb(150,0,100)"
document.getElementById("sub").innerHTML= "sub of a and b =" + sub

mul= a*b;
console.log("mul of a and b :",mul)
document.getElementById("mul").style.color= "seagreen"
document.getElementById("mul").innerHTML= "mul of a and b =" + mul

div= a/b;
console.log("div of a and b :",div)
document.getElementById("div").style.color= "red"
document.getElementById("div").innerHTML= "div of a and b =" + div

mod= a%b;
console.log("mod of a and b :",mod)
document.getElementById("mod").style.color= "violet"
document.getElementById("mod").innerHTML= "mod of a and b =" + mod



// table:
const family=[
{name:"mom",age:40},
{name:"dad",age:45},
{name:"Bro",age:27},
{name:"me",age:24}]
console.table(family);