/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const getBookById = (id: number) => books.find((book) => book.id === id);
const andi = borrowings.filter((x) => x.student === "Andi");

console.log("=== Task 1: Andi's Transactions ===");
console.log(andi);

const detail = borrowings.map((x) => {
    const bookInfo = getBookById(x.bookId);
    return {
        student: x.student,
        Title: bookInfo?.title,
        category: bookInfo?.category,
        days: x.days,
    };
});

console.log("\n=== Task 2: Detailed Transactions ===");
console.log(detail);

const programmingBorrowers = borrowings
.filter((x) => getBookById(x.bookId)?.category === "Programming")
.map((x) => x.student);

const uniqueBorrowers = [...new Set(programmingBorrowers)];

console.log("\n=== Task 3: Students who borrowed Programming books ===");
console.log(uniqueBorrowers);

const total = borrowings.length;

console.log("\n=== Task 4: Total Transactions ===");
console.log(`Total Transaction: ${total}`);

const totalDays = borrowings.reduce((total, x) => total + x.days, 0);
const avgDur = totalDays / total;

console.log("\n=== Task 5: Average Borrowing Duration ===");
console.log(`Total Days         : ${totalDays}`);
console.log(`Total Transactions : ${total}`);
console.log(`Average Duration   : ${avgDur.toFixed(2)} days`);

const termBorrowers = borrowings
.filter((x) => x.days > 7)
.map((x) => x.student);

const uniqueTermBorrowers = [...new Set(termBorrowers)];

console.log("\n=== Task 6: Students borrowing > 7 days ===");
console.log(uniqueTermBorrowers);