//print 0 to 9 vlaues
//using for loop
for(i=0;i<=9;i++){
    console.log("inside loop",i);
}
let s=i;
console.log("outside loop",s);

//using while loop
console.log("using while loop")
 i = 0;
while(i<=9){
    console.log(i);
    i++;

}


// 1 to 9 som of numbers
 i=0;
let sum = 0;
while(i<=10){
    sum = sum+i;
    i++;
}
console.log("sum of numbers",sum);
// 2nd way
let n = 10;
let tottal = (n*(n+1))/2;
console.log("sum of numbers using formula",tottal); // its fast as compare to loop

let nn = 10
let tottal1 = 0;
for(i=1;i<=nn;i++){
  tottal1 = tottal1+i;
    
}
console.log(tottal1);

//break and continue keywords

for (let i =1;i<=10;i++){
    if(i==4){
        break; //break out of the loop at 4 ok and rest of the code will executed
    }
    console.log(i);
}
console.log("Hello there")

for (let i =1;i<=10;i++){
    if(i==4){
        continue; // continue will skip at 4 and continue further execution
    }
    console.log(i);
}
console.log("Hello there")


//do-while loop
let k =0 // run executed st lest once either condn got failed
do{
    console.log(k);
    k++;
}while(k<=9)


