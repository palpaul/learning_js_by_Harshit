const { replace } = require("degit/dist/index-688c5d50");

function add( a,  b) {
    return c =a+b;
}
//call the function
console.log(add(2,5));

//using lambda function 
const num=(a,b)=>{
const cc =a+b;
return cc;
}
//call the function
const result = num(11,2);
console.log(result);


//normal function()
function isAEP(){
    const todatDate = "2024-04-06"
    const currentDate = new Date();
    const providedDate = new Date(todatDate);
    console.log(currentDate);
  // Set time to midnight (00:00:00) for both dates
    currentDate.setHours(0, 0, 0, 0);
    providedDate.setHours(0, 0, 0, 0);
    // if(currentDate.getTime()==providedDate.getTime()){
    //     return true;
    // }
    // return false
    return currentDate.getTime()==providedDate.getTime() ? true: false;
    
}
console.log(isAEP());

//function Expression
const isAEP2 =function(){
    const todatDate = "2024-04-06"
    const currentDate = new Date();
    const providedDate = new Date(todatDate);
    console.log(currentDate);
  // Set time to midnight (00:00:00) for both dates
    currentDate.setHours(0, 0, 0, 0);
    providedDate.setHours(0, 0, 0, 0);
    // if(currentDate.getTime()==providedDate.getTime()){
    //     return true;
    // }
    // return false
    return currentDate.getTime()==providedDate.getTime() ? true: false;
    
}
console.log(isAEP2());
//function using arrow function
const isAEP3 =()=>{
    const todatDate = "2024-04-06"
    const currentDate = new Date();
    const providedDate = new Date(todatDate);
    currentDate.setHours(0, 0, 0, 0);
    providedDate.setHours(0, 0, 0, 0);
    return currentDate.getTime()==providedDate.getTime()?true: false;
}
console.log("checking aep period:",isAEP3());


const isEven = (number)=>{
     return number%2==0?true:false;
}
console.log("checking number is even or not:",isEven(7));


const findTarget=(arr,target)=>{
    for(let i=0;i<=arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}
const arr = [1,3,9,6];
const target = 8
const ans = findTarget(arr,target);
console.log(ans);




const hellp = ()=>{
    console.log("hey Javascript");
}
hellp();


const opr = (n1,n2,n3)=>{
    return c = n1+n2+n3;
}
console.log(opr(1,2,3));

const isOdd = (num)=>{
return num%2 !==0?true:false
}
console.log("isOdd",isOdd(2));

//finding first char
const firstChar = anyString=>{
    return anyString[0];
}
const anyString = "Rahul";
console.log(firstChar(anyString));