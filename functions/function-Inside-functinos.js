const app =()=>{
    const myFunc = ()=>{
        console.log("hello from inside myFunc() method");
    }
    const addTwoNum = (num1,num2)=>{
        console.log("addTwoNum function executed successfully");
    return num1+num2;
    }
    const multply =(num1,num2)=>{
        console.log("multply function executed successfully");
    return num1* num2;
    }

  console.log("inside app function");  
  myFunc();
  console.log(addTwoNum(2,3));
 console.log(multply(2,3));
}
app();