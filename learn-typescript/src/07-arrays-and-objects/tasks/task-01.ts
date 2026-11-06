/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

const names = students.map(student => student.name);
const passedStudent = students.filter(student => student.score >= 70);
const citra = students.find(student => student.name === "Citra");
const totalScore = students.reduce((total,student) => total + student.score, 0);
const average = totalScore / students.length;


console.log(names);
console.log(passedStudent);
console.log(citra);
console.log(`Total Score : ${totalScore}`);
console.log(`Student Count : ${students.length}`);
console.log(`Average       : ${average.toFixed(2)}`);