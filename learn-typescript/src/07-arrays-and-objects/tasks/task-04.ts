/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];


const subtotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log("=== Task 1: Subtotal ===");
console.log(`Subtotal: Rp ${subtotal.toLocaleString("id-ID")}`);

let discount = 0;
if(subtotal >= 3000000) {
    discount = 10;
} else if (subtotal >= 2000000) {
    discount = 5;
} else {
    discount = 0;
}

const discountAmount = (subtotal * discount) / 100;

console.log("\n=== Task 2: Discount ===");
console.log(`Discount Percentage : ${discount}%`);
console.log(`Discount Amount     : Rp ${discountAmount.toLocaleString("id-ID")}`);

const finalSubtotal = subtotal - discountAmount;

console.log("\n=== Task 3: Final Subtotal ===");
console.log(`Final Price: Rp ${finalSubtotal.toLocaleString("id-ID")}`);

const expensive = cart.filter((item) => item.price > 1000000);

console.log("\n=== Task 4: Expensive Products (> Rp 1.000.000) ===");
console.log(expensive);