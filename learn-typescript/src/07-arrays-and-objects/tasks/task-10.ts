/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const getCorrectAnswer = (id: number) => questions.find(x => x.id === id)?.correctAnswer;
const result = submissions.map((sub) => {
    let correct = 0;
    let wrong = 0;

    sub.answers.forEach((ans) => {
        if (ans.answer === getCorrectAnswer(ans.questionId)) {
            correct++;
        } else {
            wrong++;
        }
    });

    return {
        student: sub.student,
        correct: correct,
        wrong: wrong,
        score: correct * 25
    };
});

console.log("=== Task 1 & 2: Student Results ===");
console.table(result);

const categories = [...new Set(questions.map(x => x.category))];
const categoryAvg = categories.map(category => {
     const categoryQues = questions.filter(x => x.category === category).map(x => x.id);

     let totalCorrect = 0;
     let totalPossibleAnswers = 0;

     submissions.forEach(sub => {
        sub.answers.forEach(ans => {
            if (categoryQues.includes(ans.questionId)) {
                totalPossibleAnswers++;
                if (ans.answer === getCorrectAnswer(ans.questionId)) {
                    totalCorrect++;
                }
            }
        });
    });

    const avg = (totalCorrect / totalPossibleAnswers) * 100;

    return {
        category: category,
        averageScore: Number(avg.toFixed(2))
    };
});

console.log("\n=== Task 3: Average Score by Category ===");
console.table(categoryAvg);

const totalStudents = result.length;
const totalScores = result.reduce((sum, res) => sum + res.score, 0);
const averageScore = Number((totalScores / totalStudents).toFixed(2));

const scoresOnly = result.map(res => res.score);
const highestScore = Math.max(...scoresOnly);
const lowestScore = Math.min(...scoresOnly);

const passedStudents = result.filter(res => res.score >= 75).length;
const failedStudents = totalStudents - passedStudents;
const passRate = Number(((passedStudents / totalStudents) * 100).toFixed(2));

const finalAnalytics = {
    totalStudents,
    averageScore,
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate
};

console.log("\n=== Task 4: Final Exam Analytics ===");
console.log(finalAnalytics);