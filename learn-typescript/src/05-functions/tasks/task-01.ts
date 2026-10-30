/**
 * A teacher wants to calculate students' final grades automatically.  
 * Instead of writing the same formula multiple times, 
 * the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

type StudentScore = {
  Name: string;
  Midterm: number;
  Assignment: number;
  Final: number;
};

const Students: StudentScore[] = [
  { Name: "Alya", Assignment: 85, Midterm: 80, Final: 92 },
  { Name: "Budi", Assignment: 78, Midterm: 75, Final: 81 },
  { Name: "Citra", Assignment: 90, Midterm: 88, Final: 95 },
];

function finalGrade(s: StudentScore): number {
  return s.Assignment * 0.3 + s.Midterm * 0.3 + s.Final * 0.4;
}

Students.forEach((s, i) => {
  console.log(`${i + 1}. ${s.Name} = ${finalGrade(s).toFixed(2)}`);
});