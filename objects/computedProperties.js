//computed properties
const key1= "objkey1";
const key2= "objkey2";

const value1 = "myValue1"
const value2 = "myValue2"

// want to construct obj/below obj using thiese variables ok
// const obj ={
//     objkey1:"myValue1",
//     objkey2:"myValue2"
// }
 //lets try


const obj1 ={
key1: value1,
key2:value2

}
console.log(obj1); // its giving obj like 
//{ key1:myValue1,key2:myValue2}  but we dont want this  
// we want key vllue also get computed so we use the blewo code
console.log("so this we use like this [key] okay then we can achieve");
const obj ={
    [key1]: value1,
    [key2]:value2
    
    }
    console.log(obj); 

    // or we can do this as well
console.log("// or we can do this as well");
    const obj2 = {}
    obj2[key1] = value1;
    obj2[key2] = value2;
    console.log(obj2);


