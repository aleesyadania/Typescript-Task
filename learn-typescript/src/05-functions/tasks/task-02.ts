/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

type Employee = {
    name: string;
    score: number;
};

function showBonusStatus(employee: Employee): void {
    const status = employee.score >= 85 ? "Approved" : "Not Approved";
    console.log(`${employee.name}: bonus ${status}`);
}

const employees: Employee[] = [
    { name: "John Cena", score: 92 },
    { name: "Undertaker", score: 76 },
    { name: "Rey Mysterio", score: 88 },
];

for (const employee of employees) {
    showBonusStatus(employee);
}