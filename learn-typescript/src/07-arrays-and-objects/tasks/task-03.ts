/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const status: Record<number, string> = {};
attendance.forEach((x) => {
    status[x.studentId] = x.status;
});

console.log("Cek status map:", status);

const present = students
.filter((y) => status[y.id] === "present")
.map((y) => y.name);

console.log("=== Task 1: Present Student Names ===");
console.log(present);

const absent = students
.filter((y) => status[y.id] === "absent")
.map((y) => y.name);

console.log("\n=== Task 2: Absent Student Names ===");
console.log(absent);

const late = students
.filter ((y) => status[y.id] === "late")
.map((y) => y.name);

console.log("\n=== Task 3: Late Student Names ===");
console.log(late);

const nameWStatus = students.map((y) => ({
    name: y.name,
    status: status[y.id],
}));

console.log("\n=== Task 4: Name with Status ===");
console.log(nameWStatus);