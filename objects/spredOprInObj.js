// spread operator in arrays


const array1 = [1,3,4];
const array2 = [5,6,7];

const newArray = [...array1,...array2];
console.log(newArray);
 // or we can spred string also

 const newArray2 = [..."abc"];
 const newArray3 = [..."1234"];
//converting array of string into number okay
 const updtArray3 = newArray3.map(Number);
console.log(newArray2);
console.log(newArray3);
console.log(updtArray3);

// spread operator in Objects

const person ={
    name:"Ram",
    gender:"Male",
    
};
const person2={
    name:"Lakhan",
    city:"Ayodhaya",
    place:"India"
}

const newPerson = {...person, ...person2}
    // if key is duplicate in obj it will oberride with last one ok
    console.log(newPerson);
    //if we want to add any key then also we can add
    const newPerson1 = {...person, ...person2 , key59:"value59"}
    console.log(newPerson1);

    // 
    const obj  = {..."abc"}
    console.log(obj);
    console.log(obj[1]);//accessing perticular element ok

    const obj2  = {...["abc","xyz"]}
    console.log(obj2);