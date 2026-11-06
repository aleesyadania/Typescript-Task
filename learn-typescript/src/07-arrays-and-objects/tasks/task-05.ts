/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const score = students.map((student) => {
    const correct = student.answers.reduce((count, answer, index) => {
        return answer === correctAnswers[index] ? count + 1 : count;
    }, 0);
    return {
        id: student.id,
        name: student.name,
        score: correct * 20,
    };
});

console.log("=== Task 1: Student Scores ===");
console.log(score);

const passed = score.filter((student) => student.score > 70);

console.log("\n=== Task 2: Passed Students (> 70) ===");
console.log(passed);

let highest = score[0];

for (let x = 1; x < score.length; x++) {
    if (score[x].score > highest.score) {
        highest = score[x];
    }
}

console.log("\n=== Task 3: Highest Score ===");
console.log(highest);

const totalClassScore = score.reduce((total, student) => total + student.score, 0);

const average = totalClassScore / score.length;

console.log("\n=== Task 4: Class Average Score ===");
console.log(`Total Class Score : ${totalClassScore}`);
console.log(`Number of Students : ${score.length}`);
console.log(`Average Score : ${average.toFixed(2)}`);