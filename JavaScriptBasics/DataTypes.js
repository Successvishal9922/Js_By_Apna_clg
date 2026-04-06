// ==============================
// 🔹 BASIC OUTPUT
// ==============================

console.log("Welcome Javascript"); 
// 👉 Prints output in console

document.writeln("This is used to print output on web-browser");
// 👉 Prints output directly on web page (browser)


// ==============================
// 🔹 DATA TYPES
// ==============================

let a = 10;              
// 👉 Number (numeric value)

let b = "Vishal";        
// 👉 String (text)

let c = null;            
// 👉 Null = intentionally empty value

let d;                   
// 👉 Undefined = declared but no value assigned

let e = true;            
// 👉 Boolean (true/false)

let f = BigInt(1515665); 
// 👉 BigInt (large numbers)

let g = Symbol("Ram");   
// 👉 Symbol (unique value)


// ==============================
// 🔹 VAR, LET, CONST
// ==============================

var x = 5;
let y = 7;
const z = 2;

// Updating values
x = 15; 
// 👉 var allows update

y = 25; 
// 👉 let allows update

// z = 3; 
// ❌ const does NOT allow update (value is fixed)

console.log(x, y, z);


// ==============================
// 🔹 HOISTING
// ==============================

// Using var
console.log("Hoisting with var:", m);
var m = 10;

/*
👉 Why undefined?
- var m is hoisted (moved to top)
- but value (10) is NOT assigned yet
- so output = undefined

Marathi:
var वर जातं पण value नाही → undefined
*/


// Using let
/*
console.log("Hoisting with let:", n);
let n = 2;

👉 Why error?
- let is also hoisted
- but stays in TDZ (Temporal Dead Zone)
- cannot access before initialization

Marathi:
let वर जातं पण वापरता येत नाही → error
*/


// ==============================
// 🔹 SCOPE + SHADOWING
// ==============================

let p = 45; // Global variable

function test() {
    let p = 65; 
    console.log("Inside function (local p):", p);
}

console.log("Outside function (global p):", p); // 45
test(); // 65

/*
👉 Why different values?
- Inside function → local p (65)
- Outside → global p (45)

👉 This is called Shadowing:
local variable hides global variable

Marathi:
function मध्ये local p वापरतं, बाहेर global p
*/


// ==============================
// 🔹 TDZ EXAMPLE
// ==============================

/*
let i = 89;

function dem() {
    console.log(i); // ❌ Error
    let i = 69;
}

👉 Why error?
- let i is hoisted inside function
- but in TDZ (not initialized yet)
- accessing before init → error

Marathi:
assign होण्याआधी वापरलं → error
*/


// ==============================
// 🔹 HOISTING + FUNCTION SCOPE
// ==============================

var h = 75;

function demo() {
    console.log("Before assignment:", h); // undefined
    var h = 25;
    console.log("After assignment:", h);  // 25
}
demo();

/*
👉 Why undefined first?
- var h inside function is hoisted
- local h hides global h
- but value not assigned yet → undefined

👉 Then value becomes 25

Marathi:
local h वर जातं → आधी undefined, मग 25
*/


// ==============================
// 🔹 LEXICAL SCOPE
// ==============================

/*
var j = 10;

function test() {
    console.log(j); // 10
}

function deo() {
    var j = 20;
    test();
}

deo();

👉 Why 10?
- test() is defined in global scope
- so it uses global j (10), not deo() j

👉 Lexical Scope:
function uses variables where it is CREATED, not called

Marathi:
function जिथे तयार झालं तिथलं variable वापरतं
*/


// ==============================
// 🔹 UNDEFINED
// ==============================

/*
let a;
console.log(a);

👉 Why undefined?
- variable declared
- but no value assigned

Marathi:
declare केलं पण value नाही → undefined
*/


// ==============================
// 🔹 BLOCK SCOPE
// ==============================

/*
{
    var a = 10;
    let b = 20;
}

console.log(a); // 10
console.log(b); // ❌ error

👉 Why?
- var → NOT block scoped → accessible outside
- let → block scoped → not accessible outside

Marathi:
var बाहेर चालतो, let नाही
*/