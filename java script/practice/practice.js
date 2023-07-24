
// let txt = "Hello World!";
// let x = txt.length;
// alert(x);
// const fruits = ["Apple", "Banana", "Orange"];
// for (x of fruits) {
//   console.log(x);
// }

// var a=0;
// var b=1;
// for (i=0;i<=5;i++){
//     temp=a+b;
//     a=b;
//     b=temp;
//     console.log(temp)
// }
// var ss=[0,1,2,3,4,5]
// for (i=0;i<=ss.length-1;i++){
//     temp=0
//      temp=temp+ss.length-1
//     console.log(temp)
// }



function play(){
   const price= document.getElementById('price').value
    console.log('function is called')
    if(price==200){
        alert('Booked in Tennis Court at Rs.200 ')
    }
    else if(price==1000)
    {
        alert('Booked in club house at Rs.1000 ')
    }else
    {
        alert('Booking Failed, Already Booked') 
    }
}














