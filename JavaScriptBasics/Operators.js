console.log("Operatrs in javascript");  

//Arithmatic operators:
/*
let a = prompt("enter first number");//if use prompt to take user input it takes input  as string to solve this we have to declare data type 
let b = prompt("enter 2nd number");

//console.log("a+b = " , a + b); if i take 5 , 2 then addition will be 7 but this gives 52 becuse takes input as string 



*/

// Taking input
let a = Number(prompt("Enter the number a: "));
let b = Number(prompt("Enter the number b: "));

// Arithmetic operations
console.log("Addition (A + B) =", a + b);
console.log("Subtraction (A - B) =", a - b);
console.log("Multiplication (A * B) =", a * b);
console.log("Division (A / B) =", a / b);
console.log("Modulus (A % B) =", a % b);

// Exponential
let c = Number(prompt("Enter c: "));
let d = Number(prompt("Enter d: "));


console.log("Exponential (c^d) =", c ** d);// power

// Unary Operators
console.log("Post Increment of c =", c++); 
console.log("After Post Increment, c =", c);

console.log("Post Decrement of c =", c--);
console.log("After Post Decrement, c =", c);

console.log("Pre Increment of d =", ++d);
console.log("Pre Decrement of d =", --d);


// Assignment operators
let m = 5;
let n = 45;

m += 1;
console.log("using += operator : " , m);
m -= 2;
console.log("using -= operator : " , m);
m *= 2;
console.log("using *= operator : ", m);
m /= 2;
console.log("using /= operator : " , m);
n %= 2;
console.log('using %= operator : ' , n);
m **= 3;// power using assignment operator 
console.log("power using assignment operator : " , m);

 
//comparison operator

let r = 5;
let s = "5";

console.log("R == S : " , r==s);// == it cheks only value not data type even second variable value is string it gives true 
console.log("R===S : " , r===s);// === cheks actual value with data type 
console.log("R!=S : ", r!=s);//it checks values are not equal if not equl it gives true if equl it gives false
console.log("R!==S : " , r!==s); //it cheks value is not euql as well as data type is not equal then it gives true

//<,>,<=,>=

//logical operator 
// &&,||,!

