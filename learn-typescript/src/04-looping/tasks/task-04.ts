/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
    125000,
    350000,
    78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
];

let totalRevenue = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let highValueCount = 0;

for (let i = 0; i < sales.length; i++) {
    const currentSales = sales[i];

    
    totalRevenue += currentSales;

    
    if (currentSales > highestTransaction) {
        highestTransaction = currentSales;
    }

    
    if (currentSales < lowestTransaction) {
        lowestTransaction = currentSales;
    }

    
    if (currentSales >= 300000) {
        highValueCount++;
    }
}


const averageTransaction = totalRevenue / sales.length;

console.log("-------------------------------------");
console.log("Total Sales Revenue  : Rp" + totalRevenue.toLocaleString("id-ID"));
console.log("Highest Transaction  : Rp" + highestTransaction.toLocaleString("id-ID"));
console.log("Lowest Transaction   : Rp" + lowestTransaction.toLocaleString("id-ID"));
console.log("High Value (>=300k)  : " + highValueCount + " transactions");
console.log("Average Transaction  : Rp" + averageTransaction.toLocaleString("id-ID"));
console.log("-------------------------------------");