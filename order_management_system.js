// Task 1: Create an Inventory Array of Product Objects
// An array will be created to label items chosen. 
let inventory= [
    { name: 'Spanish Latte', price: 6, quantity: 90, lowStockLevel: 15 },
    { name: 'Pistachio Latte', price: 7, quantity: 76, lowStockLevel: 10 },
    { name: 'Americano', price: 4, quantity: 104, lowStockLevel: 22 },
    { name: 'Caramel Latte', price: 6, quantity: 85, lowStockLevel: 17 },
    { name: 'Turkish Coffee', price: 5, quantity: 68, lowStockLevel: 9 }];
// Array of five items has been created. 
// Task 1 is now completed.

// Task 2: Create an Orders Array of Order Objects
let orders = [];
console.log(orders)
/* Array has now been complete.  
Task 2 is now completed.*/


// Task 3: Create a Function to Place an Order
function placeOrder(customerName, orderedItem) {
let product = inventory.find(p => p.name === orderedItem.name);
if (!product) {
console.log(`Product ${orderedItem.name} is not found in out inventory.`);
return;}
if (product.quantity < orderedItem.quantity) {
console.log(`${orderedItem.name} does not have enough stock.`);
return;}
product.quantity -= orderedItem.quantity;
// An if statement was used to determine stock status of chosen items. 
let newOrder = {
customerName: customerName,items: [orderedItem],
status: "Pending"}; 
orders.push(newOrder);
console.log("Order placed:", newOrder);}
// Function to display new orders has been created. 
placeOrder("Aya", { name: "Spanish Latte", quantity: 1 });
// Function is now tested and output meets expected outcome. 
// Task 3 is now complete. 

// Task 4: Create a Function to Calculate Total for an Order
function calculateOrderTotal(order) {
let total = 0; 
// Total was set to zero as a beginning point. As items get added, the total aount would change.
order.items.forEach(item => {
let product = inventory.find(p => p.name === item.name);
// Function created to allow the products or items to be identified in the inventory.
if (product) {
total += product.price * item.quantity;}});
// This functions determines the total price of the tem chosen and the quantity chosen. 
return total;}
let sampleOrder = {
customerName: 'Danny',
items: [{ name: 'Americano', quantity: 3}],
status: 'pending'};
// Sample data created to test function. 
// Code tested and displays accurate results. 
let total = calculateOrderTotal(sampleOrder);
console.log(total);
// Function created to release total price. 
// Task 4 is now complete. 


