//alert("Shanku")

//Regular Functions:

// function add(a,b){
//     console.log("a is:",a , "b is:",b , "add is:",a+b);
// }
// add(26,63)

// function sub(a,b){
//     console.log("a is:",a , "b is:",b , "sub is:",a-b);
// }
// sub(26,63)

// function mul(a,b){
//     console.log("a is:",a , "b is:",b , "mul is:",a*b);
// }
// mul(26,63)
 
// function div(a,b){
//     console.log("a is:",a , "b is:",b , "div is:",a/b);
// }
// div(26,63)

// function rem(a,b){
//     console.log("a is:",a , "b is:",b , "rem is:",a%b);
// }
// rem(26,63)

// function exp(a,b){
//     console.log("a is:",a , "b is:",b , "exp is:",a**b);
// }
// exp(2,3)

// function operation(perform){
//     console.log("operation of a and b is:",perform)
// }
// operation(26+63)
// operation(26-63)
// operation(26*63)
// operation(26/63)
// operation(26%63)
// operation(2**3)

// function matic(){
//     var a=Number(document.getElementById("enter a").value);
//     var b=Number(document.getElementById("enter b").value);
//     console.log("the value is:",a+b)
//     document.getElementById("ssk").innerHTML="The operation is:"+ Number(a+b);
// }

function add(){
    var a=Number(document.getElementById("a").value);
    var b=Number(document.getElementById("b").value);
    console.log("the value  add is:",a+b)
    document.getElementById("Add").style.color= "Blue"
    document.getElementById("Add").innerHTML="The add is:" + Number(a+b);
   
}


function sub(){
    var c=Number(document.getElementById("c").value);
    var d=Number(document.getElementById("d").value);
    console.log("the value sub is:",c-d)
    document.getElementById("Sub").style.color= "Red"
    document.getElementById("Sub").innerHTML="The sub is:" + Number(c-d);
}

function mul(){
    var e=Number(document.getElementById("e").value);
    var f=Number(document.getElementById("f").value);
    console.log("the value mul is:",e*f)
    document.getElementById("Mul").style.color= "Green"
    document.getElementById("Mul").innerHTML= "The mul is:" +Number(e*f);
}

function div(){
    var g=Number(document.getElementById("g").value);
    var h=Number(document.getElementById("h").value);
    console.log("the value  div is:",g/h)
    document.getElementById("Div").style.color= "Blueviolet"
    document.getElementById("Div").innerHTML="The div is:" + Number(g/h);
}

function rem(){
    var i=Number(document.getElementById("i").value);
    var j=Number(document.getElementById("j").value);
    console.log("the value rem is:",i%j)
    document.getElementById("Rem").style.color= "Skyblue"
    document.getElementById("Rem").innerHTML= "The rem is:" +Number(i%j);
}

function exp(){
    var k=Number(document.getElementById("k").value);
    var l=Number(document.getElementById("l").value);
    console.log("the value  exp is:",k**l)
    document.getElementById("Exp").style.color= "Yellow"
    document.getElementById("Exp").innerHTML= "The exp is:" +Number(k**l);
}

var ss=263/"4";
console.log(ss)

let data="false"; 
console.log('firststatement')

console.log('secondstatement');