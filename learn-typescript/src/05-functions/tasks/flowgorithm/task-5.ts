function Factorial(x: number): number {
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result = result * i;
    }
    return result;
}

console.log("===== FACTORIAL CALCULATOR =====");
console.log("");

const num = 7;

console.log(`Calling Factorial(${num})`);
console.log("");

const hasil = Factorial(num);

console.log(`${num}! = ${hasil}`);