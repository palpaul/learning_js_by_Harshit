// for of loop in array
console.log("for of loop in array");

let fruits = ["apple","Mango","graps"];
let fruits2 = [];
for(let fruit of fruits){
    console.log(fruit);
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

// for In loop in array //
console.log("for-in loop in array");
let indd = [];
for(let index in fruits){
    console.log(fruits[index]);
    indd.push(fruits[index].toUpperCase());
}
console.log(indd);