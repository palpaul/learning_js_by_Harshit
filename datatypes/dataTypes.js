/*
string
Number
boolean
undefined
null
bigInt
symbol

*/
let age =23;
let firstName = "Rahul";
console.log(typeof(age));
console.log(typeof(firstName)) ;

//convert number to string
age = age+"" ;// now it got converted into string first way 
console.log(typeof(age));

console.log("converting number to string: ",typeof(age.toString())); //2nd way
//convert string to number

    let myStr = "34";
    myStr = + myStr; // jyst add + sign before the string
    console.log(typeof myStr);
    //2nd way
    let myage = "18";
    myage = Number(myage);
    console.log(typeof myage);

