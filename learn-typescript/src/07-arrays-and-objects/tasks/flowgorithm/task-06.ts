const score: number[] = [100, 85, 78, 80, 95, 60, 82];
const passing: number = 80;

let passedCount: number = 0;

console.log("===== PASSING GRADE COUNTER =====");
console.log(`Scores: ${score.join(', ')}\n`);

for (let x= 0; x < score.length; x++) {
    if (score[x] >= passing) {
        passedCount++;
    }
}

console.log(`Students Passed : ${passedCount} out of ${score.length}`);