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
function displayProductDetails(inventory) {
let stockStatus; {
if (inventory.quantity > inventory.lowStockLevel) 
stockStatus = "In Stock";
else stockStatus = "Low Stock"}
// An if else statement was used to set the code to display the items stock status. 
console.log(`Name: ${inventory.name}`);
console.log(`Price: ${inventory.price}`);
console.log(`Quantity: ${inventory.quantity}`);
console.log(`Stock Status: ${stockStatus}`);};
displayProductDetails(inventory[4]);
/* Item number four was chosen to display results. Output matches expected results when tested. 
Statement has now been complete and tested. Code revealed accurate output. 
Task 2 is now completed.*/
