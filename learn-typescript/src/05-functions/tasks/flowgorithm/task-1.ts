function PrintWelcome(name: string): void {
    console.log(`Welcome to Moklet Coding Club, ${name}!`);
}

console.log("===== WELCOME MESSAGE =====");
console.log("");
const namaAnggota = "Aleesya Dania";

console.log(`Calling PrintWelcome("${namaAnggota}")`);

PrintWelcome(namaAnggota);