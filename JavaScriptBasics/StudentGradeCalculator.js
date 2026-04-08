alert("calculate the grades of student");

let Marks = prompt("Enter Marks");

if (Marks >= 80 && Marks <= 100 ) {
    console.log("Pass with Grade A");
}
else if (Marks >= 70 && Marks < 80) {
    console.log("Pass with Grade B");
}
else if (Marks >= 60 && Marks < 70) {
    console.log("Pass with Grade C");
}
else if (Marks >= 50 && Marks < 60) {
    console.log("Pass with Grade D");
}
else if (Marks >= 35 && Marks < 50) {
    console.log("Pass with Grade E");
}
else{
    console.log("Fail");
}

alert("calculated successfully");