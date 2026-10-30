function AddNumbers(num1: number, num2: number): number {
    return num1 + num2
}

console.log("===== SUM CALCULATOR =====");
console.log("");

const x = 23;
const y = 12;

console.log(`Calling AddNumbers(${x}, ${y})`);
console.log("");

const result = AddNumbers(x,y);

console.log(`The sum of ${x} + ${y} is: ${result}`);