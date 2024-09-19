let inventory = [
    { name: 'Spanish Latte', price: 6, quantity: 90, lowStockLevel: 15 },
    { name: 'Pistachio Latte', price: 7, quantity: 76, lowStockLevel: 10 },
    { name: 'Americano', price: 4, quantity: 104, lowStockLevel: 22 },
    { name: 'Caramel Latte', price: 6, quantity: 85, lowStockLevel: 17 },
    { name: 'Turkish Coffee', price: 5, quantity: 68, lowStockLevel: 9 }
];

let orders = [];
console.log("Orders initialized:", orders);

function placeOrder(customerName, orderedItem) {
    let product = inventory.find(p => p.name === orderedItem.name);
    if (!product) {
        console.log(`Product ${orderedItem.name} is not found in our inventory.`);
        return;
    }
    if (product.quantity < orderedItem.quantity) {
        console.log(`${orderedItem.name} does not have enough stock.`);
        return;
    }
    product.quantity -= orderedItem.quantity;
    let newOrder = {
        customerName: customerName,
        items: [orderedItem],
        status: "Pending"
    };
    orders[orders.length] = newOrder; 
    console.log("Order placed:", newOrder);
}

function checkPendingOrders() {
    if (orders.length === 0) {
        console.log("0 pending orders.");
        return;
    }
    orders.forEach(order => {
        if (order.status === "Pending") {
            console.log(`Customer: ${order.customerName}`);
        }
    });
}

checkPendingOrders();
placeOrder("Aya", { name: "Spanish Latte", quantity: 1 });
placeOrder("Danny", { name: "Americano", quantity: 3 });
checkPendingOrders();
