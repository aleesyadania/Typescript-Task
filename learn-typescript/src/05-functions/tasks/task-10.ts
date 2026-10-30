 /**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollments(enrollments: Enrollment[]): number {
    return enrollments.length;
}

function calculateTotalScore(enrollments: Enrollment[]): number {
    let total = 0;
    for (const x of enrollments) {
        total += x.score;
    }
    return total;
}

function calculateTotalDuration(enrollments: Enrollment[]): number {
    let total = 0;
    for (const x of enrollments) {
        total += x.duration;
    }
    return total;
}

function getScoresByCourse(enrollments: Enrollment[], course: string): number[] {
    const scores: number[] = [];
    for (const x of enrollments) {
        if (x.course === course) scores.push(x.score);
    }
    return scores;
}

function countCompleted(enrollments: Enrollment[]): number {
    let count = 0;
    for (const x of enrollments) {
        if (x.completed) count++;
    }
    return count;
}

function countIncomplete(enrollments: Enrollment[]): number {
    let count = 0;
    for (const e of enrollments) {
        if (!e.completed) count++;
    }
    return count;
}

function calculateCompletionPercentage(enrollments: Enrollment[]): number {
    return (countCompleted(enrollments) / countTotalEnrollments(enrollments)) * 100;
}

function findHighestScore(enrollments: Enrollment[]): number {
    let highest = enrollments[0].score;
    for (const x of enrollments) {
        if (x.score > highest) highest = x.score;
    }
    return highest;
}

function findLowestScore(enrollments: Enrollment[]): number {
    let lowest = enrollments[0].score;
    for (const x of enrollments) {
        if (x.score < lowest) lowest = x.score;
    }
    return lowest;
}

function calculateAverageScore(enrollments: Enrollment[]): number {
    return calculateTotalScore(enrollments) / countTotalEnrollments(enrollments);
}

function countPassingStudents(enrollments: Enrollment[]): number {
    let count = 0;
    for (const x of enrollments) {
        if (x.score >= 75) count++;
    }
    return count;
}

function countStudentsByCourse(enrollments: Enrollment[], course: string): number {
    let count = 0;
    for (const x of enrollments) {
        if (x.course === course) count++;
    }
    return count;
}

function calculateAverageScoreByCourse(enrollments: Enrollment[], course: string): number {
    const scores = getScoresByCourse(enrollments, course);
    let total = 0;
    for (const s of scores) {
        total += s;
    }
    return total / scores.length;
}

function calculateAverageDuration(enrollments: Enrollment[]): number {
    return calculateTotalDuration(enrollments) / countTotalEnrollments(enrollments);
}

function printAcademicReport(enrollments: Enrollment[]): void {
    console.log("=== Completion Statistics ===");
    console.log(`Total Enrollments: ${countTotalEnrollments(enrollments)}`);
    console.log(`Completed: ${countCompleted(enrollments)}`);
    console.log(`Incomplete: ${countIncomplete(enrollments)}`);
    console.log(`Completion Percentage: ${calculateCompletionPercentage(enrollments).toFixed(2)}%`);

    console.log("\n=== Academic Statistics ===");
    console.log(`Highest Score: ${findHighestScore(enrollments)}`);
    console.log(`Lowest Score: ${findLowestScore(enrollments)}`);
    console.log(`Average Score: ${calculateAverageScore(enrollments).toFixed(2)}`);
    console.log(`Passing Students: ${countPassingStudents(enrollments)}`);
}

function printCourseReport(enrollments: Enrollment[]): void {
    console.log("\n=== Course Statistics ===");
    console.log(`TypeScript - Students: ${countStudentsByCourse(enrollments, "TypeScript")}`);
    console.log(`TypeScript - Average: ${calculateAverageScoreByCourse(enrollments, "TypeScript").toFixed(2)}`);
    console.log(`Database   - Students: ${countStudentsByCourse(enrollments, "Database")}`);
    console.log(`Database   - Average: ${calculateAverageScoreByCourse(enrollments, "Database").toFixed(2)}`);
    console.log(`Backend    - Students: ${countStudentsByCourse(enrollments, "Backend")}`);
    console.log(`Backend    - Average: ${calculateAverageScoreByCourse(enrollments, "Backend").toFixed(2)}`);

    console.log("\n=== Learning Statistics ===");
    console.log(`Total Learning Hours: ${calculateTotalDuration(enrollments)}`);
    console.log(`Average Duration: ${calculateAverageDuration(enrollments).toFixed(2)}`);
}


printAcademicReport(enrollments);
printCourseReport(enrollments);