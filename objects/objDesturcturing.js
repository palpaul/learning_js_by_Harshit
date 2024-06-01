//object Destructuring 

const { constants } = require("degit/dist/index-688c5d50");


const band ={
    bandName:"led Zepplin",
    famousSOng:"staurway to heaven",
    year:1968,
    anotherFamousSong:"Kashmir"
};
// destructuring general method
const var1 = band.bandName;
const var2 = band.famousSOng;   
console.log(var1,"----",var2);
// destructuring recommended method
const {bandName,famousSOng,...restProperties} = band;
console.log(bandName,"--->>>>",famousSOng);
console.log("rest properties: " ,restProperties)
//if we want to change variable name then do this
const {bandName:bnd1,famousSOng:song1} = band;
console.log(bnd1,"--->>>>",song1);
