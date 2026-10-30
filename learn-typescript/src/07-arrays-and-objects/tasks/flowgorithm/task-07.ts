const name: string[] = ["Aleesya", "Javier", "Reyza", "Budi"];

console.log("===== REVERSE ORDER PRINTER =====\n");
console.log(`Original Order : ${name.join(', ')}\n`);
console.log("Reverse Order : ");

for (let x = name.length - 1; x >= 0; x--) {
    console.log(name[x]);
}