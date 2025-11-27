function calculateTotalPrice() {
    // Step 1: Select all price elements
    const priceElements = document.querySelectorAll('.prices');
    let totalPrice = 0;

    // Step 2: Sum the prices
    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent); // Convert to number
        if (!isNaN(price)) { // Check if it's a valid number
            totalPrice += price;
        }
    });

    // Step 3: Create a new row for the total price
    const table = document.querySelector('table'); // Assuming there's only one table
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.colSpan = 2; // Assuming you want it to span two columns
    newCell.textContent = 'Total Price: ' + totalPrice.toFixed(2); // Display total price

    // Step 4: Append the new cell to the new row and the row to the table
    newRow.appendChild(newCell);
    table.appendChild(newRow);
}

// Call the function to execute the logic
calculateTotalPrice();