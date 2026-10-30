const ProductNames: string[] = ["Notebook", "Pen", "Eraser", "Ruler", "Pencil"];
const productPrices: number[] = [8000, 3000, 2500, 5000, 2000];

function rupiah(price: number): string {
    return "Rp." + price.toLocaleString("id-ID");
}

function cheapestItem(names: string[], prices: number[]): void {
    console.log("===== CHEAPEST ITEM FINDER =====");
    console.log("");

    for (let x: number = 0; x < names.length; x++) {
        const nameLabel = names[x].padEnd(8, '  ');

        console.log(`${nameLabel} : ${rupiah(prices[x])}`);
    }

    console.log("");

    let cheapestIndex: number = 0;

    for (let x: number = 1; x < prices.length; x++) {
        if(prices[x] < prices[cheapestIndex]) {
            cheapestIndex = x;
        }
    }
    const cheapestName: string = names[cheapestIndex];
    const cheapestPrice: string = rupiah(prices[cheapestIndex]);

    console.log(`Cheapest Item : ${cheapestName} (${cheapestPrice})`);
}

cheapestItem(ProductNames, productPrices);