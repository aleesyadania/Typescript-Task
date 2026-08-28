/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};  

const book1: Book = {
  isbn: "978-0134685991",
  title: "Tentang kamu",
  author: "Tereliye",
  totalPages: 384,
  category: "Fiction",
  isAvailable: true
};

const book2: Book = {
  isbn: "978-0596009205",
  title: "Seni Bersikap Bodo Amat",
  author: "Mark Manson",
  totalPages: 176,
  category: "Self-Improvement",
  isAvailable: false
};

const book3: Book = {
  isbn: "978-0201633610",
  title: "Hujan",
  author: "Tereliye",
  totalPages: 395,
  category: "Science Fiction",
  isAvailable: true
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);