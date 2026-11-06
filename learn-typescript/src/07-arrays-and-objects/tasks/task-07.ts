/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrder = orders.filter((order) => order.status === "completed");

console.log("=== Task 1: Completed Orders ===");
console.dir(completedOrder, { depth: null });

const totalOrders = orders.map((order) => {
    const totalValue = order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return { ...order, totalValue };
});

console.log("\n=== Task 2: Total Value of Each Order ===");
console.log(totalOrders.map(o => ({ id: o.id, customer: o.customer, totalValue: o.totalValue })));

const completedOrdersTotals = totalOrders.filter(o => o.status === "completed");
const topCustomer = completedOrdersTotals.reduce((max, order) => 
    order.totalValue > max.totalValue ? order : max
);

console.log("\n=== Task 3: Customer Who Spent the Most ===");
console.log(`Customer: ${topCustomer.customer} | Total Spent: Rp ${topCustomer.totalValue.toLocaleString("id-ID")}`);

const revenue = completedOrdersTotals.reduce((total, order) => total + order.totalValue, 0);

console.log("\n=== Task 4: Total Revenue (Completed Orders) ===");
console.log(`Total Revenue: Rp ${revenue.toLocaleString("id-ID")}`);

const uniquePurchased = [
    ...new Set(orders.flatMap((order) => order.items).map((item) => item.product))
];

console.log("\n=== Task 5: All Purchased Products ===");
console.log(uniquePurchased);