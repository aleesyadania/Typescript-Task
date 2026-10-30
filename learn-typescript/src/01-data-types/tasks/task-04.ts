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
  isbnCode: string;
  bookTitle: string;
  writer: string;
  pages: number;
  genre: string;
  available: boolean;
};


const libraryBooks: Book[] = [
  {
    isbnCode: "978-0134685991",
    bookTitle: "Tentang kamu",
    writer: "Tereliye",
    pages: 384,
    genre: "Fiction",
    available: true
  },
  {
    isbnCode: "978-0596009205",
    bookTitle: "Seni Bersikap Bodo Amat",
    writer: "Mark Manson",
    pages: 176,
    genre: "Self-Improvement",
    available: false
  },
  {
    isbnCode: "978-0201633610",
    bookTitle: "Hujan",
    writer: "Tereliye",
    pages: 395,
    genre: "Science Fiction",
    available: true
  }
];


console.log("Digital Library Catalog:");
console.log(libraryBooks);

