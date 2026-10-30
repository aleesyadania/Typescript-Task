const score: number[] = [78, 92, 85, 67, 90];

function findHighestScore(examScores: number[]): void {
    console.log("===== HIGHEST SCORE FINDER =====");
    console.log("");
    console.log(`Scores : ${examScores.join(", ")}`);
    console.log("");

    let highestScore: number = examScores[0];

    for (let x: number = 1; x< examScores.length; x++) {
        
        if (examScores[x] > highestScore) {
            
            highestScore = examScores[x];
        }
    }

    console.log(`Highest Score : ${highestScore}`);
}

findHighestScore(score);