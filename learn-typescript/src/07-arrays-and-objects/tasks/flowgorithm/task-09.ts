const staffName: string[] = ["Rangga", "Kirana", "Bagas", "Amel"];
const saleAmount: number[] = [1200000, 1850000, 950000, 1600000];

let highest: number = 0;
let lowest: number = 0;

console.log("===== SALES LEADERBOARD =====");

for (let x = 0; x < staffName.length; x++) {
    console.log(`${staffName[x]} : Rp${saleAmount[x].toLocaleString('id-ID')}`);

    if (saleAmount[x] > saleAmount[highest]) {
        highest = x;
    }
    if (saleAmount[x] < saleAmount[lowest]) {
        lowest = x;
    }
}

console.log("");
console.log(`Top Performer : ${staffName[highest]} (Rp${saleAmount[highest].toLocaleString('id-ID')})`);
console.log(`Top Performer : ${staffName[lowest]} (Rp${saleAmount[lowest].toLocaleString('id-ID')})`)