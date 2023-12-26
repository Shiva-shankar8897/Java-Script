// let k = 10;
// console.log(k--)

// let s = 10;
// console.log(--s)

// let count = 10
// console.log(++count)

// let ss = 5
// ss++
// ss /= 3
// console.log(ss)

// console.log('b' < 'd')
// console.log("Bob" > "Dave")

// let player = 'John';
// let points = 144;
// let minPoints = 100;

// if (points >= minPoints) {
//     console.log(`Well done, ${player}!`);
// }

// let num1 = 12;
// if (num1 > 5) {
//     console.log('Bigger than 5');
//     if (num1 < 47) {
//         console.log('Between 5 and 47');
//     }
// }

// let num2 = 4;
// if (num2 > 5) {
//     console.log("Bigger than 5");
//     if (num2 < 7) {
//         console.log("Smaller than 7");
//     }
// }

// let number = -5;

// if (number >= 0) {
//     console.log("Positive number");
// } else {
//     console.log("Negative number");
// }

// let time = 15;

// if (time < 10) {
//     console.log("Good morning");
// } else if (time < 20) {
//     console.log("Good day");
// } else {
//     console.log("Good evening");
// }

// let choice = 1;

// switch (choice) {
//     case 1://match!
//         console.log("Sports");
//         break;
//     case 2:
//         console.log("Business");
//         break;
//     case 3:
//         console.log("Technology");
//         break;
// }

// let color = "yellow";

// switch (color) {
//     case "blue":
//         console.log("This is blue.");
//         break;
//     case "red":
//         console.log("This is red.");
//         break;
//     default:
//         console.log("Color not found.");
// }

// let age = 42;
// let isAdult = (age < 18) ? "Too young" : "Old enough";
// console.log(isAdult);
// let num3 = 2;
// let isZero = (num3== 0) ? "Zero" : "Not zero";
// console.log(isZero);

// let bill = 1800;
// bill = (bill >= 1500) ? bill * 0.85 : bill;
// console.log(bill);

// let num4= 14;
// let res = (num4 % 2 == 0) ? "even" : "odd";
// console.log(res)

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// let x = 0;
// for (let i = 0; i < 3; i++) {
//     x += i;
// }
// console.log(x);

// for (let i = 5; i >= 0; i -= 1) {
//     console.log(`Bullets: ${i}`);
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }

// for (i = 1; i < 5; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }

// let num = 1;

// while (num <= 10) {
//     if (num == 3) {
//         break;
//     }
//     console.log(num);
//     num++;
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 3; i++) {
//     if (i == 2) {
//         continue;
//     }
//     sum += i;
// }
// console.log(sum);


// for (i = 1; i < 7; i++) {
//     if (i == 4) {
//         break;
//     }
//     console.log(i);
// }

// function login(user) {
//     console.log("Hi, " + user);
// }
// login("shanku")

// function discount(purchase) {
//     if (purchase >= 1500) {
//         purchase *= 0.85;
//     }
//     console.log(purchase);
// }

// discount(1900);//discount
// discount(1200);//no discount

// function add(x, y) {
//     return x + y;
// }

// let result = add(5, 6);
// console.log(result);

// function divide(x, y) {
//     return x / y;
// }

// divide(6, 3);

// var person = {
//     name: "John", age: 31, 
//     favColor: "green", height: 183
//    };
//    var x = person.age;
//    var y = person['age'];
//    console.log(x)
//    console.log(y)

// var course = {name: "JS", lessons: 41};
// document.write(course.name.length);

// function person(name,age) {
//     this.name = name;  
//     this.age = age;
//     this.changeName = function (name) {
//       this.name = name;
//     }
//   }
  
// var p = new person("David",21);
// p.changeName("John");
// console.log(p)

// function person(name, age) {
//     this.name= name;  
//     this.age = age;
//     this.yearOfBirth = bornYear;
//   }
//   function bornYear() {
//     return 2016 - this.age;
//   }
  
//   var p = new person("A", 22);
//   document.write(p.yearOfBirth());

  var myString = "abcdef";
document.write(myString.length);