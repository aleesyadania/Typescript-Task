/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const ratePerHour = 8000;
const totalMinutes = 7 * 60 + 35;

const fullHours = Math.floor(totalMinutes / 60);
const remainingMinutes = totalMinutes % 60;

let billedHours: number;
if (remainingMinutes > 0) {
  billedHours = fullHours + 1;
} else {
  billedHours = fullHours;
}

const paymentBeforeDiscount = billedHours * ratePerHour;

const isEligibleForDiscount = totalMinutes > 5 * 60;

let discount: number;
if (isEligibleForDiscount) {
  discount = paymentBeforeDiscount * 0.15;
} else {
  discount = 0;
}

const finalPayment = paymentBeforeDiscount - discount;

console.log("Total Playing Time (minutes):", totalMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Total Billed Hours:", billedHours);
console.log("Payment Before Discount:", paymentBeforeDiscount);
console.log("Discount:", discount);
console.log("Final Payment:", finalPayment);