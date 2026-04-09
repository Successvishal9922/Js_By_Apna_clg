alert("Print odd no from 0-100");

let count = 0;

for (let i = 0; i <=100; i++) {
    if (i%2!==0) {
        console.log(i);
        count++;
    }
    
}

console.log("Total Odd No : " + count);