function CalculateAverage(a: number, b: number, c: number): number {
    const total = a + b + c;
    
    return Number((total / 3).toFixed(2)); 
}

function DetermineGrade(average: number): string {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function PrintReport(name: string, average: number, grade: string): void {
    const formattedName = name.padEnd(15, ' ');
    console.log(`${formattedName} | Average: ${average} | Grade: ${grade}`);
}

console.log("===== STUDENT GRADE REPORT SYSTEM =====");
console.log("");

const students = [
    { name: "Aleesya Dania", s1: 94, s2: 98, s3: 99 },
    { name: "Cha Eun Woo", s1: 95, s2: 55, s3: 58 }
];


for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`Calling CalculateAverage(${student.s1}, ${student.s2}, ${student.s3})`);
    const avg = CalculateAverage(student.s1, student.s2, student.s3);
        
    console.log(`Calling DetermineGrade(${avg})`);
    const grade = DetermineGrade(avg);
        
    console.log(`Calling PrintReport("${student.name}", ${avg}, "${grade}")`);
        
    PrintReport(student.name, avg, grade); 
    console.log("");
    }