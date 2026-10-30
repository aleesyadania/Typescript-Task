function CalculateSubtotal(price: number, quantity: number): number {
    return price * quantity;
}

function CalculateShipping(subtotal: number): number {
    
    if (subtotal >= 200000) {
        return 0;
    } else {
        return 15000;
    }
}

console.log("===== ONLINE STORE INVOICE =====");
console.log("");

const hargaBarang = 60000;
const jumlahBarang = 5;

console.log(`Calling CalculateSubtotal(${hargaBarang}, ${jumlahBarang})`);

const subtotal = CalculateSubtotal(hargaBarang, jumlahBarang);

console.log(`Subtotal     : Rp${subtotal.toLocaleString('en-US')}`);
console.log("");
console.log(`Calling CalculateShipping(${subtotal})`);

const shippingCost = CalculateShipping(subtotal);

let shippingText = "";
if (shippingCost === 0) {
    shippingText = `Rp${shippingCost.toLocaleString('en-US')} (FREE - subtotal >= Rp200,000)`;
} else {
    shippingText = `Rp${shippingCost.toLocaleString('en-US')} (Flat fee applies)`;
}
console.log(`Shipping Cost : ${shippingText}`);
console.log("");

const grandTotal = subtotal + shippingCost;

console.log(`Grand Total  : Rp${grandTotal.toLocaleString('en-US')}`);