//array destructuring

const myArray = ["value1","value2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1 is: ",myvar1);
// console.log("value of myvar2 is: ",myvar2);


//its called destructing and its behaving like we created to diff variables ok
let [myvar1,myvar2] = myArray;

console.log("value of myvar1 is: ",myvar1);
console.log("value of myvar2 is: ",myvar2);
//if we want to change the vlaue 
myvar1 = "value changed";
console.log("value of myvar1 is: ",myvar1);

//scenario -2
console.log("scenario -2");
const myArr = ["value1","value2","value3"];
let [myv1,myv2] = myArray;
console.log("value of myv1 is: ",myv1);
console.log("value of myv2 is: ",myv2);
//scenario -3
console.log("scenario -3");
const myAr = ["value1"];
let [mv1,mv2] = myAr;
console.log("value of mv1 is: ",mv1);
console.log("value of mv2 is: ",mv2);

//scenario -4
console.log("scenario -4 skipping any vlaue");
const myA = ["value1","value2","value3"];
//if want to skip any vlaue just put comma
let [v1, ,v2] = myA;
console.log("value of mv1 is: ",v1);
console.log("value of mv2 is: ",v2);
//scenario -5
console.log("scenario -5  rest of the vlaues");
const myAAr = ["value1","value2","value3","value4"];
//if we want after two value rest of the vlaue stored in new array
let [vv1,vv2, ...myNewAAr] = myAAr;
console.log("value of mv1 is: ",vv1);
console.log("value of mv2 is: ",vv2);
console.log("rest of the array vlaues: ", myNewAAr);


