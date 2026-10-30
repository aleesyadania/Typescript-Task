const score: number[] = [45, 90, 75, 100, 55];

console.log("===== SCORE RANKING =====");
console.log(`Original Scores : ${score.join(', ')}\n`);

for (let x = 0; x < score.length - 1; x++) {
    for (let y = 0; y < score.length - 1 - x ; y++) {
        if (score[y] > score [y + 1]) {
            let temp = score[y];
            score[y] = score[y + 1];
            score[y + 1] = temp;
        }
    }
}

console.log(`Sorted Scores : ${score.join(', ')}`);