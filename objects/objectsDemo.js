/* OBJECTS --> also a references type its stpore same like array means u  means using heap memory

arrays are good but not sufficient for real world data
objects store key value pairs
objects don't have index
*/

const { name } = require("degit/dist/index-688c5d50");

// how to create objects
// how to access data from objects
// hoe to add key vlaue pair to objects

//creating obj
//using curly braces that also called as object literal
const person = {
    name:"Rahul",
    age:29,
    addr:"etawah",
    hobbies:["pubg","reading","movies"]
};
//accessing obj properties
console.log(person);
console.log(person.hobbies);
//adding key value pair into object
console.log("adding key value pair into object");
person.gender = "male";
console.log(person);
//accessing object properties using dot . and bracket [] notation ok
console.log(person["name"]); // using bracket
console.log(person.name); // using dot(.)



//created another obj 
// diff between . and [] properties access
const hello ={
    name:"Rhul",
    "s he":"23",
    addr:["hh","", ]
};
console.log(hello.addr);
//console.log(hello."s he"); // this prop cant use using dot
console.log(hello["s he"]);

//if we want to add key as emal into thei person obj

const key ="email";

person[key] = "rkuma783@gmail.com";
console.log(person); // now in person oyu can see key addeed as email with valye  ok
