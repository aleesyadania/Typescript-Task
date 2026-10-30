/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  code: string;
  name: string;
  price: number;
  stock: number;
  weight: number;
  rating: number;
  isDiscounted: boolean;
};

const product1: Product = {
  code: "P001",
  name: "Wireless Mouse",
  price: 150000,
  stock: 50,
  weight: 0.2,
  rating: 4.5,
  isDiscounted: true,
};

const product2: Product = {
  code: "P002",
  name: "Mechanical Keyboard",
  price: 750000,
  stock: 20,
  weight: 1.1,
  rating: 4.8,
  isDiscounted: false,
};

const product3: Product = {
  code: "P003",
  name: "USB-C Cable",
  price: 45000,
  stock: 100,
  weight: 0.05,
  rating: 4.2,
  isDiscounted: true,
};

console.log(product1);
console.log(product2);
console.log(product3);