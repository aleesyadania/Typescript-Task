function BMICategory(weight: number, height: number): string {
    const bmiValue = weight /(height * height);

    console.log(`BMI Value : ${bmiValue.toFixed(1)}`);

    let category: string = "";

    if (bmiValue < 18.5) {
        category = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        category = "Normal";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    return category;
}

console.log("===== BMI CATEGORY FUNCTION =====");
console.log("");

const bb = 42;
const tb = 1.60;

console.log(`Calling BMICategory(${bb}, ${tb})`);
console.log("");

const kategoriSiswa = BMICategory(bb, tb);

console.log(`Category   : ${kategoriSiswa}`);