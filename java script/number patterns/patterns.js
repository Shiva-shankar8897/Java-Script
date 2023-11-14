for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
        document.write(i +" ");
    }
    document.write("<br>");
}
document.write("<br>");

for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
        document.write(j +" ");
    }
    document.write("<br>");
}
document.write("<br>");

var count=1;
for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
        document.write(count +" ");
        count++;
    }
    document.write("<br>");
}
document.write("<br>");


for(let i=1; i<=4; i++){
    for(let j=4; j>=i; j--){
        document.write("&nbsp;");
    }
    for(let k=1; k<=i; k++){
        document.write(i +" ");
    }
    document.write("<br>");
}
document.write("<br>");


for(let i=1; i<=4; i++){
    for(let j=4; j>=i; j--){
        document.write("&nbsp;");
    }
    for(let k=1; k<=i; k++){
        document.write(k +" ");
    }
    document.write("<br>");
}
document.write("<br>");

var count=1;
for(let i=1; i<=4; i++){
    for(let j=4; j>=i; j--){
        document.write("&nbsp;");
    }
    for(let k=1; k<=i; k++){
        document.write(count+" ");
        count++;
    }
    document.write("<br>");
}
document.write("<br>");