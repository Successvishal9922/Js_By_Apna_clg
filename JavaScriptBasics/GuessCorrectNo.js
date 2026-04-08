alert("Guess the correct no");

let number = 7;

let userinput;

do {
    userinput = Number(prompt("enter the correct no"))
} while (userinput !== number);

console.log("Congratulations Buddy you guess correctly");