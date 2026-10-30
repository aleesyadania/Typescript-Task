/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

let totalPriceofFriedRice = 3 * 18000;
let totalPriceofDrinks = 2 * 5000;
let totalSemua = totalPriceofFriedRice + totalPriceofDrinks;
let totalBayar = totalSemua - 10000;

console.log("Total Nasi Goreng:", totalPriceofFriedRice);
console.log("Total Air Mineral:", totalPriceofDrinks);
console.log("Total Sebelum Diskon:", totalSemua);
console.log("Total Bayar:", totalBayar);