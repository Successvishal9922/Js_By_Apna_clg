alert("Count Digits");

let Num = Number(prompt("Enter the Number"));

let count = 0;

while (Num>0) {
    Num = Math.floor(Num/10);
    count++;
}

console.log("count : " + count);