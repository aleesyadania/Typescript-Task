const fruits: string[] = ["Apple","Banana","Orange","Mango","Grape"];

function printFruitsStock(fruitList: string[]): void {
    console.log("===== FRUIT STOCK LIST =====");
    console.log("");

    for (let x = 0; x < fruitList.length; x++) {
        const formatIndex = `Index ${x}  `;
        console.log(`${formatIndex} : ${fruitList[x]}`);
    }
}

printFruitsStock(fruits);