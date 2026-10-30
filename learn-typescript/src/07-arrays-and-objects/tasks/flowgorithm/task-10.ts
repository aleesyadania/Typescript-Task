const score: number[][] = [
    [90, 85, 95],
    [75, 80, 70],
    [100, 100, 90]
];

console.log("===== EXAM SCORE MATRIX =====");

for (let x = 0; x < score.length; x++) {
    let totalScore: number = 0;

    for (let y = 0; y < score[x].length; y++) {
        totalScore += score[x][y];
    }
    let average: number = totalScore/score[x].length;

    console.log(`Student ${x + 1} : ${score[x].join(', ')} -> Total: ${totalScore}, Average: ${average.toFixed(2)}`);
}