//arrays -> reference datatypes
// arrays --> collections of elemenents
// or ordered collections of elements
let fruit = "banana";

//create array

let mixed = [12,2,2,3,"Stirng",null,undefined];
console.log(mixed);
let fruits = ["apple","mango","graps"];
console.log(fruits[2]);
console.log(fruits);
fruits[1] = "oranges"; // inserting new element at index of 1 ok
console.log(fruits);


let obj ={}; //literal object

console.log(typeof fruits); //obj
console.log(typeof obj); // obj
// if you want to check any obj is array or not then use isArray() method
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(obj)); // false
