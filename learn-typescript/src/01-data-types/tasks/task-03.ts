/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */


type Student = {
  id: string;
  name: string;
  age: number;
  active: boolean;
};


const students: Student[] = [
  {
    id: "ST2026045",
    name: "Aleesya Dania",
    age: 15,
    active: true
  },
  {
    id: "ST2026046",
    name: "Cha Eun Woo",
    age: 18,
    active: true
  },
  {
    id: "ST2026047",
    name: "Jay Park",
    age: 17,
    active: true
  }
];


console.log("Student Information:");
console.log(students);

