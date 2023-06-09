//alert("shanku")

//create an array
const family=["mom","dad","bro","me",263,true,[26,63,263]];
console.log(typeof family);
console.log(Array.isArray(family));
console.log(family[0]);
console.log(family[3]);
console.log(family[6]);
console.log("length of string is:",family.length);
console.log(family[family.length-3]);

// add and remove in array at the end
const family1=["mom","dad","bro","me"];
console.log("before add the element:",family1);
family1.push("sunny");
family1.push("grandpa");
console.log("after add the element at end:",family1);
family1.pop();    // dont need to pass the any value
family1.pop();
family1.pop();
console.log("after remove the element at end:",family1);

// shift and unshift in array at the starting
family1.unshift("shanku");
console.log("after add the element at starting:",family1);
family1.shift();
console.log("after remove the element at starting:",family1);
family1.shift();
console.log("after remove the element at starting:",family1);

// convert array to string
console.log(family1.toString());
const mystring=family1.toString();
console.log("string format is:",mystring);
console.log(family1);
console.log("string to array is:",mystring.split(","));

//adding of two arrays to single array
const veg=["tomato","chilli","spinach","potato","beetroot","carrot"];
const non=["chicken","mutton","eggs","fish","prawns"]
console.log("after convert to single array is:",veg.concat(non));

//splice is add & del between the array
console.log(veg);
veg.splice(1,2);
console.log(veg);
veg.splice(1,2,"radish","brinjal","drumstick"); // adding value
console.log(veg);

// sort & reverse
console.log(veg);
console.log("ascending order is:",veg.sort());
console.log("decending order is:",veg.reverse());

var number=[26,63,263,57,974,2469];
console.log("ascending order is:",number.sort());
console.log("decending order is:",number.reverse());




