"use strict";
 // it will strictly check the data types
console.log("print something on console");
//confirm("please confirm");
 var fName = "Rahul";
console.log(fName);
fName = "Priya";
console.log(fName);
//
var valu1 = 10;
console.log(valu1*10);
console.log(valu1**10); //square
console.log(valu1**.5); //squre root
console.log(valu1/10);
// var and let block scope vs function scope

let firstName = "Ram";
 firstName = "Kishan";
//let lastName = "Kishan";
console.log(firstName);

//
const pi = 3.14;
console.log(pi);
//pi = 4.14; // cant change value of const 
//console.log(pi); 

// bigInt
let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER); // max safe interger tell us how big integer value we can store ok

//
let myNumber1 = BigInt(12); // now its a BigIng
let sameMyNumber1 = 12n; // its also BigInt

console.log(myNumber1);
console.log(sameMyNumber1);