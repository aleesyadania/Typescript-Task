/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPricePerNight = 650000;
const nightsStayed = 4;
const serviceCharge = 120000;
const taxRate = 0.11;
const isVipMember = true;

const roomSubtotal = roomPricePerNight * nightsStayed;

let discount: number;
if (isVipMember) {
  discount = roomSubtotal * 0.12;
} else {
  discount = 0;
}

const roomAfterDiscount = roomSubtotal - discount;
const tax = roomAfterDiscount * taxRate;

const finalPayment = roomAfterDiscount + tax + serviceCharge;

let isFreeBreakfast: boolean;
if (nightsStayed >= 3 || isVipMember) {
  isFreeBreakfast = true;
} else {
  isFreeBreakfast = false;
}

console.log("Room Subtotal:", roomSubtotal);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast:", isFreeBreakfast);