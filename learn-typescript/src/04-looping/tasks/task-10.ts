/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let revisionCount = 0;

let totalScore = 0;
const notSubmittedStudents = [];
const revisionStudents = [];

for (let i = 0; i < submissions.length; i++) {
    const currentScore = submissions[i].score;
    totalScore += currentScore;

    if (submissions[i].submitted) {
        submittedCount++;
        
        
        if (currentScore >= 75) {
            passedCount++;
        } else {
            revisionCount++;
            revisionStudents.push(submissions[i].student);
        }
    } else {
        notSubmittedCount++;
        notSubmittedStudents.push(submissions[i].student);
    }
}

const averageScore = totalScore / submissions.length;

console.log("---------------------------------------");
console.log("Submitted Students      : " + submittedCount);
console.log("Not Submitted Students  : " + notSubmittedCount);
console.log("Passed Students         : " + passedCount);
console.log("Students Need Revision  : " + revisionCount);
console.log("Not Submitted Names     : " + notSubmittedStudents.join(", "));
console.log("Revision Student Names  : " + revisionStudents.join(", "));
console.log("Class Average Score     : " + averageScore);
console.log("---------------------------------------");