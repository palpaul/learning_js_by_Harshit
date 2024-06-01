//String Indexing
console.log("1. string indexing");
let nm = "Rahul";
console.log("first index",nm[0]);
console.log("length","length vars : ",nm.length);
let nm1 = "xddwesdsd sdddsz";
console.log("last Index : ",nm1[nm1.length-1]); // it will give last index
console.log("2md last Index : ",nm1[nm1.length-2]); 
//trim() remove leading and trailing white spaces ok
console.log("2. trim() method");
let nm2 =" ram ";
console.log(nm2);
console.log(nm2.length);
console.log(nm2.trim());
console.log(nm2.length); // still cant change the string in same var because string is immutable 
// so if you have to trim it really then stroe in new var then only trim it it will give a new sting
 nm2 = nm2.trim();
console.log(nm2.length);
console.log(nm2);
console.log(nm2.toUpperCase());
let str = " Yes, but Doctor Who? ";
str = str.trim();
console.log(str);
//slice() , start index and end index
console.log("3. slice() method");
let str1 ="Harshit";
console.log(str1.slice(0,4)); // starting from oth index and till 3rd index ie. 4th cahractor ok
console.log(str1.slice(1)); //stating from index 1 to till end
//replaceAll()
console.log("4. replaceAll() method");
let str2 ="05-02-1994";
console.log(str2.replaceAll("-",""));
console.log(str2.replaceAll("-","*")); // it will replcae - to *
console.log(str2.replaceAll("-","#")); // it wil replcae - to # ok

// replace()
let originaString = "Hello, World! World is amazing.";
let newString = originaString.replace(/World/g, "Universe");
console.log(originaString); // Output: Hello, World! World is amazing.
console.log(newString);      // Output: Hello, Universe! Universe is amazing.

//..
let sr = "I'm a Timelord from the planet Gallifrey.";
let modifiedStr = sr.replace(/\s/g, '');

console.log(str);          // Output: I'm a Timelord from the planet Gallifrey.
console.log(modifiedStr);  // Output: I'maTimelordfromtheplanetGallifrey.


// toString()
console.log("5. toString() method");
let number = 42;
// Using toString() method to convert the number to a string or object ot string
let stringNumber = number.toString(); // convert number to string
console.log(typeof number);       // Output: number
console.log(typeof stringNumber); // Output: string
console.log(number);              // Output: 42
console.log(stringNumber);        // Output: "42"

//SubString()
console.log("6. substring() method");
let originalString = "Hello, World!";
// Using substring() to extract a portion of the string
console.log(originalString.length);
let substring = originalString.substring(7, 12);
console.log(originalString); // Output: Hello, World!
console.log(substring);      // Output: World

//includes() it returns true or false
console.log("7. includes() method");
let mainString = "Hello, World!";
let searchString = "World";
// Using includes() to check if searchString is present in mainString
let isPresent = mainString.includes(searchString);
console.log(mainString);   // Output: Hello, World!
console.log(isPresent);    // Output: true
//match()
console.log("8. match() method");
/*The match() method in JavaScript is used to retrieve the matches
 when matching a string against a regular expression.*/

let text = "The quick brown fox jumps over the lazy dog.";
let pattern = /fox/g;
let pattern2 = /fox/;
let pattern3 = /o/g;
let pattern4 = /o/;
// Using match() to find all occurrences of the pattern in the text
let matches = text.match(pattern);
console.log(text);    // Output: The quick brown fox jumps over the lazy dog.
console.log(matches); // Output: [ 'fox' ]
let matche2 = text.match(pattern2);
let matche3 = text.match(pattern3);
let matche4 = text.match(pattern4);
console.log(matche2);
console.log(matche3);
console.log(matche4);
//concat()
console.log("9. concat() method");
let s1 = "Hello";
let s2 = ", ";
let s3 = "World";

// Using concat() to join the strings
let result = s1.concat(s2);
let result2 = s1.concat(s2,s3);
console.log(result); // Output: Hello,
console.log(result2); //Output: Hello, World
//
console.log(s1+s2+s3)
// concatination using template stirng

let agee = 22;
let fnm = "Rahul";

let aboutMe = "My name is " +fnm+  " and my age " + agee+ ""; // 
let abtMe = `my name is ${fnm} and my age ${agee}`
console.log(aboutMe);
console.log(abtMe);


let firstName ;
console.log(typeof firstName);
firstName = "Raahul";
console.log(typeof firstName, firstName);

console.log(typeof null);// here it shold be ntype of null , its a bug in Java script


