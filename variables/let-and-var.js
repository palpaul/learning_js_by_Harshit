// block scope vs function scope

// let and cosnt are block scope
// var is function scope 

{
    // block-1
}

{
    // block-2
}


{
    let firstName = "Rahul";
    const lastName="pal";
    console.log(firstName); // within block we can access
    console.log(lastName);
}
//outside of block can be access ???? Mo we cant access let outside of the block okay 

//console.log(firstName); // will get error here ok
//console.log(firstName); // error will get

{
firstName = "rkp";
console.log(firstName);
}

{
    var hey = "hey"
}
console.log(hey); //incase of var we can access outside of the block okay 


{
    console.log(hey);
}




function myApp(){
    if(true){
        //let firstName1 = "PalRahul";
        var firstName2 = "PalRahul";
       // console.log(firstName1);
        console.log(firstName2);
    }

    //console.log(firstName1);
    console.log(firstName2);
}
myApp();