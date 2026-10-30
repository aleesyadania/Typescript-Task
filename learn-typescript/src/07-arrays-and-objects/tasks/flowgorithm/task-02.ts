const temperatres: number[] = [29, 31, 28, 30, 32, 27, 29];

function printWeeklyTemperature(temps: number[]): void {
    let totalTemp: number = 0;

    console.log("===== WEEKLY TEMPERATURE LOG =====");
    console.log("");

    for (let x = 0; x < temperatres.length; x++) {
        const dayLabel = `Day ${x + 1}  `;

        console.log(`${dayLabel} : ${temps[x]} C`);

        totalTemp += temps[x];
    }

    const averageTemp: number = totalTemp/temps.length;

    console.log("");
    console.log(`Total Temperature : ${totalTemp} C`);
    console.log(`Average Temperature : ${averageTemp.toFixed(2)} C`); 
}

printWeeklyTemperature(temperatres);