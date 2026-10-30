/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */

let studentName: string = "Nadia Putri";
let studentId: string = "ST2026045";

let assignmentScore: number = 88.5;
let midtermScore: number = 84;
let finalExamScore: number = 91.5;
let attendanceScore: number = 100;

let participatesInExtracurricular: boolean = true;

console.log("Student Name:", studentName);
console.log("Student ID:", studentId);
console.log("Assignment Score:", assignmentScore);
console.log("Midterm Exam Score:", midtermScore);
console.log("Final Exam Score:", finalExamScore);
console.log("Attendance Score:", attendanceScore);
console.log(
  "Participates in Extracurricular:",
  participatesInExtracurricular
);
