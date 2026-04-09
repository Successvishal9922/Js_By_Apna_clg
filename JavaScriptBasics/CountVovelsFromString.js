/*let Str = prompt("Enter a String");

let count = 0;

for (let ch of Str) {

    if ( ch === 'a' || ch === 'e' || ch === 'i' || 
        ch === 'o' || ch === 'u' ||
        ch === 'A' || ch === 'E' || ch === 'I' || 
        ch === 'O' || ch === 'U') 
        {
        
            count++;
    }

}
console.log("Total count : " + count); 

this normal way to find vovels in string

*/

let Str = prompt("enter a String").toLowerCase();
let count = 0;
let constant = 0;
for (let element of Str) {
    if ("aeiou".includes(element)) {
        count++;
    }
    else if (element >= 'a'&& element <='z') {
        constant++;
    }
}
console.log("Toatal count : " + count);
console.log("Total Constants : " + constant);