//alert("This is Shanku")

//length of string
var firstname="Shiva";
var lastname="Shankar";
console.log("first name length is:",firstname.length);
console.log("last name length is:",lastname.length);
var fullname="Shiva Shankar";
console.log("full name length is:",fullname.length);
console.log("full name type is:",typeof fullname);

// slice method 
var name="shiva shankar";
var name1= name.slice(0,9);
console.log("slice name is:",name1);

// charAt
console.log(name.charAt(9));
console.log(name.charAt(name.length-3));

//replace
var nickname="shanku"
    nickname=name.replace("shiva", "Shanku")
console.log(nickname);
console.log("replace name is:",nickname.replace(name));

//replace all
var mine="p1 is a very good writer in tollywood.p1 is also a speaking magician in the tollywood.";
   mine=mine.replaceAll("p1","Trivikram");
console.log("replace all is:",mine);

//upper case
console.log(fullname.toUpperCase());

//lower case
console.log(fullname.toLowerCase());

//trim
var user=prompt("Enter user name is:").trim();
console.log(user, "length is:", user.length);
//var user=prompt("Enter user name is:").trimStart();
//console.log(user, "length is:", user.length);
//var user=prompt("Enter user name is:").trimEnd();
//console.log(user, "length is:", user.length);

// split
var family="mom,dad,brother,me";
console.log(family.split(","));

// string concatenation
var fname="Shiva";
var lname="Shankar";
//var full=fname + " " + lname;
//console.log("full name is:",full);
console.log(fname.concat(" ",lname));

//includes
const fam="mom,dad,brother,me,grandpa";
console.log(fam.includes("me"));
console.log(fam.includes("grandma"));



