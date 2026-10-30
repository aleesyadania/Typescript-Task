/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

type Submission = {
    student: string;
    submitted: boolean;
    score: number;
}

function countTotalStudents(submissions: Submission[]): number {
    return submissions.length;
}

function countSubmitted(submissions: Submission[]): number {
    let count = 0;
    for (const x of submissions) {
        if (x.submitted) count++;
    }
    return count;
}

function countMissing(submissions: Submission[]): number {
    let count = 0;
    for (const x of submissions) {
        if (!x.submitted) count++;
    }
    return count;
}

function countPassed(submissions: Submission[]): number {
    let count = 0;
    for (const x of submissions) {
        if (x.score >= 75) count++;
    }
    return count;
}

function countNeedsRevision(submissions: Submission[]): number {
    let count = 0;
    for (const x of submissions) {
        if (x.submitted && x.score < 75) count++;
    }
    return count;
}

function calculateAverageScore(submissions: Submission[]): number {
    let total = 0;
    for (const x of submissions) {
        total += x.score;
    }
    return total / submissions.length;
}

function findHighestScore(submissions: Submission[]): number {
    let highest = submissions[0].score;
    for (const x of submissions) {
        if (x.score > highest) highest = x.score;
    }
    return highest;
}

function findLowestScore(submissions: Submission[]): number {
    let lowest = submissions[0].score;
    for (const x of submissions) {
        if (x.score < lowest) lowest = x.score;
    }
    return lowest;
}

function printAssignmentReport(submissions: Submission[]): void {
    console.log("=== LMS Assignment Report ===");
    console.log(`Total Students: ${countTotalStudents(submissions)}`);
    console.log(`Submitted Assignments: ${countSubmitted(submissions)}`);
    console.log(`Missing Assignments: ${countMissing(submissions)}`);
    console.log(`Passed Students: ${countPassed(submissions)}`);
    console.log(`Students Requiring Revision: ${countNeedsRevision(submissions)}`);
    console.log(`Average Score: ${calculateAverageScore(submissions).toFixed(2)}`);
    console.log(`Highest Score: ${findHighestScore(submissions)}`);
    console.log(`Lowest Score: ${findLowestScore(submissions)}`);
}

printAssignmentReport(submissions); 