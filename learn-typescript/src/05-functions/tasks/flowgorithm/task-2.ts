function Square(num: number): number {
    return num * num
}

console.log("===== SQUARE CALCULATOR =====")
console.log("");

const angka = 8;

console.log(`Calling Square(${angka})`);
console.log("");

const hasil = Square(angka);

console.log(`${angka} squered is ${hasil}`);