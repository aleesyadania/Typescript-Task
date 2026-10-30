function PrintReceiptLine(itemName: string, quantity: number, price: number): void {
    const subtotal = quantity * price;
    const formattedPrice = `Rp${price.toLocaleString('id-ID')}`;
    const formattedSubtotal = `Rp${subtotal.toLocaleString('id-ID')}`;
}

console.log("===== RECEIPT PRINTER =====");
console.log("");
const x = "Matcha";
const x1 = 2;
const x2 = 35000;
console.log(`Calling PrintReceiptLine('${x}', ${x1}, ${x2})`);
PrintReceiptLine(x, x1, x2);
console.log("");
const y = "Dubai Chewy Cookie";
const y1 = 1;
const y2 = 17000;
console.log(`Calling PrintReceiptLine('${y}', ${y1}, ${y2})`);
PrintReceiptLine(y, y1, y2);