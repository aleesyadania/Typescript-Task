/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeAvg = employees.map((emp) => {
    const total = emp.projects.reduce((sum, proj) => sum + proj.score, 0);
    const avg = total / emp.projects.length;
    return {
        name: emp.name,
        averageScore: Number(avg.toFixed(2)),
    };
});

console.log("=== Task 1 ===");
console.table(employeeAvg);

const top = employeeAvg.filter((emp) => emp.averageScore > 85);

console.log("\n=== Task 2 ===");
console.table(top);

const needsImprov = employees
    .filter((emp) => emp.projects.some((proj) => proj.score < 80))
    .map((emp) => emp.name);

console.log("\n=== Task 3 ===");
console.log(needsImprov);
