const person = {
    name:"Rahul",
    age:29,
    hobbies:["singing","gaming"],
}
const key  = "email";
person[key] = "rkuma783@gmail.com";
//console.log(person);

// iterate objectes generally in two ways using 
// for in loop
// object.keys

for(let key in person){
   // console.log(person[key]); // able to access obj vlaue
    // if want key vlaue pair
   // console.log(`${key} : ${person[key]}`);
   //or 
   console.log(key,":", person[key]);
}

//
for(let key of Object.keys(person)){
    console.log(person[key])
}