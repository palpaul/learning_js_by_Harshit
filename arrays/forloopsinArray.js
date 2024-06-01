// for loops in arrays

let fruits = ["apple","mango","graps","banana"];

let fruits2 =[];
for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);

    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
//console.log(fruits[0]);


// use const for array 5*
const fruts = ["apple","mango"]; // address is stored  0x11 in heap memory
// and same address we are pushing the elements ok
// so for premitive data type stack us used cant changes const vlaue but for refrence data type like array
// we can change the vlaue of const okay because its use heap memory
fruts.push("banana");
console.log(fruts);

// remommended for array use constant 
console.log("array loops using while loop");
const ft = ["apple","mango","graps"];
let i = 0;
let ftt = [];
while(i<=ft.length-1){
    console.log(ft[i])
    ftt.push(ft[i]);
    i++;
}
console.log(ftt);










