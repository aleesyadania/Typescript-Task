/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {
  studentId: string;
  fullName: string;
  gradeLevel: string;
};

type Course = {
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalHours: number;
};

type Registration = {
  student: Student;
  course: Course;
  registrationDate: string;
  isPaid: boolean;
};

const registration1: Registration = {
  student: { studentId: "S001", fullName: "Andi Pratama", gradeLevel: "Grade 10" },
  course: { courseId: "C001", courseTitle: "Intro to JavaScript", instructorName: "Pak Budi", totalHours: 20 },
  registrationDate: "2026-09-01",
  isPaid: true,
};

const registration2: Registration = {
  student: { studentId: "S002", fullName: "Siti Rahma", gradeLevel: "Grade 11" },
  course: { courseId: "C002", courseTitle: "Python for Beginners", instructorName: "Bu Ani", totalHours: 25 },
  registrationDate: "2026-09-03",
  isPaid: false,
};

const registration3: Registration = {
  student: { studentId: "S003", fullName: "Budi Santoso", gradeLevel: "Grade 12" },
  course: { courseId: "C003", courseTitle: "Advanced TypeScript", instructorName: "Pak Doni", totalHours: 30 },
  registrationDate: "2026-09-05",
  isPaid: true,
};

console.log(registration1);
console.log(registration2);
console.log(registration3);