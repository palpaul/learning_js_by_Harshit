let fruits = ["apple","Orange","graps"];
console.log(fruits);
//push insert the element at the last
fruits.push("Banana");
console.log(fruits);
//pop ---? remove the elements from the last  ands also remove the element
let poppedFruit= fruits.pop();
console.log("popped fruits is :",poppedFruit);

//unshift ---> adding the element from the start
fruits.unshift("Banana");
console.log(fruits);
//shift ---> remove the element from the start and also returned

let shiftFruit = fruits.shift();
console.log("removed (shift) fruit is : ",shiftFruit);

// push ,pop is fast as compare to unshift,shift  because in shift unshift first shift all the eleent from array then perform 
// insert and remove operations ok

//primitive vs refrence type

let num1 = 6;
let num2 = num1;
console.log("value of num1 is : " ,num1);
console.log("value of num2 is : " ,num2);
num1++;
console.log("after increment of value num1" );
console.log("value of num1 is : " ,num1); // only num1 will change becuase it primitive datatype
// primitive datatype store vlaue in stack and each and every variable have diff memory allocation
console.log("value of num2 is : " ,num2);


let array1 = ["item1","item2"];
let array2 = array1;
console.log("value of array1 is : " ,array1);
console.log("value of array2 is : " ,array2);

array1.push("item3");
console.log("after pushing the element to aaray1 ");
console.log("value of array1 is : " ,array1); //both array will changed in this case , in refrence type data will stored in heap and its have the same address for both array but pointers is diff ok
//two pointers which is referring to the same array ok
console.log("value of array2 is : " ,array2);

// so now how to clone array of concatenate two array
let arr1 = ["item1","item2"];
let arr2 = ["item1","item2"]; //it ele are more so its not a good idea instead of this use slice method ok to copy array

console.log(arr1===arr2); //false it both are are diff(seprate)
arr1.push("item3"); // ele will instet only in arr1 okay 
console.log(arr1); 
console.log(arr2)
console.log("copying array using slice method okay")
let ar1 = ["item1","item2"];
let ar2 = ar1.slice(0) // it start form 0 index and goes till last 
// same thing we can do using concat ok
let ar3 = [].concat(ar1);
console.log(ar1===ar2); //false it both are are diff(seprate)
console.log(ar1===ar3) // it will also false

ar1.push("item3"); // ele will instet only in arr1 okay 
console.log(ar1); 
console.log(ar2);
console.log(ar3);

// best way to cloning(copy) array using spred operator( ... three dots) okay
console.log("using spread operator");
console.log("ar1 values:==>",ar1);
let ar4 = [...ar1]; // spread opr clone the array 1 vlaues ok
console.log("ar4 vlaues:==>",ar4);

//copying ar1 ele and adding some extra ele in new arry how to do that 
let a1 = ["item1","item2"];
let a2 = a1.slice(0).concat(["item3", "item4"]) // copy array 1 vlaue and added 2 extra ele ok
// same thing we can do using concat ok
let a3 = [].concat(a1,["item3", "item4"]); // copy array 1 vlaue and added 2 extra ele ok
console.log(a1); //original array
console.log(a2); // copy array 1 vlaue and added 2 extra ele ok
console.log(a3) // similar // copy array 1 vlaue and added 2 extra ele ok

let a4 = [...a1, ["item3", "item4"]];
let a5 = [...a1, "item3", "item4"];
let a6 = [...a1, ...a2];
console.log(a4);
console.log(a5);
console.log(a6);