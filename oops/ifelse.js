let n = 17;
if(n>=18){
    console.log("you can play bgmi");
}else{
    console.log("you can play mario");
}

if(n%2===0){
    console.log("even number")
}else{
    console.log("odd number")
}

/*
 * 
 *  by default falsy values
 *   false
 *   ""
 *  null
 *  undefined
 *  0
 */


 //truthy values
 // "abc", "xyz"
 // 1,-1 etc


let firstName = "" //falsy value
if(firstName){ //here this condition is false so it wil executed else 
    console.log(firstName)
}else {
    console.log("hey firstName is empty")
}

let firstName2 = 0; //its also a falsy value ok
if(firstName2){
    console.log(firstName2)
}else {
    console.log("first name is 0 or empty")
}


//ternary opertor
let age = 5;
let drink ; 
if(age>=4){
    console.log("coffee");
}else{
    console.log("milk");
}
//using ternary operator or conditional operator
drink = age>=4 ? "coffee": "milk";
console.log(drink);

let fname = "Harshit";
let agee= 16;
// AND && will check all of the condition get it true then overall true otherwise beocome false
if(fname[0]==="H" && age>18){
    console.log("Inside if")
}else{
    console.log("Inside else")
}
// OR  || will check anyof the condition get it true then overall true
if(fname[0]==="H" || age>18){
    console.log("Inside if")
}else{
    console.log("Inside else")
}

// nested if else

let winningNumber = 19;
//prompt function will run on browser only
let userGuess = +prompt("Guess a number"); //+ sign will convert the sting to number because prompt function will return as string
console.log(typeof userGuess,userGuess); //prompt function will return string always // you have to convert this string to number using + sign before the prompt function or Number(prompt) like this

if(userGuess=== winningNumber){
    console.log("your guess is right!!")

}else{
    if(userGuess<winningNumber){
        console.log("your guess is too low")
    }else{
        console.log("your guess is too high")
    }
}

// if 
// else if
//else
 //once any condition get true then it jump out from the if- else block and execute further code after the if- else block ok
let teperature = 24;
if(teperature <= 0){
    console.log("its extermely cold outside");
}else if(teperature < 16) {
    console.log("its too clod outside")
}else if(teperature <26) {
    console.log("its okay outside")
}else if(teperature <45) {
    console.log("its too hot outside")
}else{
    console.log("extermly hot outside")
}
console.log("hello")


// switch case

let day = 3;
if(day === 0){
    console.log("its Sundaye");
}else if(day ===1) {
    console.log("its Monday")
}else if(day ===2) {
    console.log("its Tuesday")
}else if(day ===3) {
    console.log("its Wednesday")
}else if(day ===4) {
    console.log("its Thrusday")
}else if(day ===5) {
    console.log("its Friday")
}else if(day ===6) {
    console.log("its Saturday")
}else{
    console.log("Invalid Day")
}
console.log("hello")

//same thing using switch case
day =7;
switch(day){
    case 0: day = "Sunday"
    console.log(day);
    break
    case 1: day = "Monday"
    console.log(day);
    break
    case 2: day = "Tuesday"
    console.log(day);
    break
    case 3: day = "Wednesday"
    console.log(day);
    break
    case 4: day = "Thrusday"
    console.log(day);
    break
    case 5: day = "Friday"
    console.log(day);
    break
    case 6: day = "Saturday"
    console.log(day);
    break
    default:
       console.log("invalid day");

}