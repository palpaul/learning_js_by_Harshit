
//before default paramter how to handle undefined
function addTwo(a,b){
    // handiling undefind
    if(typeof b ==="undefined"){
        b=0;
    }
    return a+b;

}
const ans = addTwo(4) //here we b=pass only one paramter that is b is undefined right
console.log(ans);


//now after introduce default paramters

function addTwoNum(a=1,b=5){ // here directly we can pass value to that parameter
    return a+b;

}
console.log(addTwoNum()); 

