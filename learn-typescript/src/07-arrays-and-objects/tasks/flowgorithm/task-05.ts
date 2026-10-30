const Name: string[] = ["Aleesya","Reyza", "Syahrai", "mmyesha", "Marsya"];
const searchName: string = "Aleesya";

let found: boolean = false;
let foundIndex: number = -1;

console.log("===== STUDENT NAME SEARCH =====\n");
console.log(`Searching for: ${searchName}\n`);

for (let x=0; x < Name.length; x++) {
    if (Name[x] === searchName) {
        found= true;
        foundIndex = x;
        break;
    }
}

if (found) {
    console.log(`Result : FOUND at index ${foundIndex}`);
} else {
    console.log("Result : NOT FOUND");
}