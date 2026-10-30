function FinalPrice(price: number, discount: number): number {
    let finalDiscount = discount;

    if (discount === 0) {
        finalDiscount = 5;
        console.log("-> Default Discount Applied");
    }
    const discountAmout = price * (finalDiscount/100);
    const finalResult = price - discountAmout;

    return finalResult;
}

console.log("===== COFFEE PRICE CALCULATOR =====");
console.log("");
console.log("Calling FinalPrice(75000, 0)");

const price1 = FinalPrice(75000, 0);

console.log(`Final Price : Rp${price1.toLocaleString('id-ID')}`);
console.log("");
console.log("Calling FinalPrice(75000, 15)");

const price2 = FinalPrice(75000, 15);
console.log(`Final Price : Rp${price2.toLocaleString('id-ID')}`);