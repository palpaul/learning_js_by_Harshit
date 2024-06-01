// hoisting


hello();
function hello(){
    console.log("before declating the function we are calling the fucnt8ion that is hoisting");
}

//scenario-2
var hi = "hi";
console.log(hi); //o/p print hi

//scenario-3
let hi2 = "hi2";
console.log(hi2); //o/p hi2

//scenario-4 // here we will get uncaught error 
hello2();
const hello2=()=>{
 console.log(heyyy);

 }
 