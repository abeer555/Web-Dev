// External JavaScript file: ticket.js for Part 6

function calculateTotal() {
    const adultPrice = 10;
    const childPrice = 5;

    const adultInput = document.getElementById('adultTickets');
    const childInput = document.getElementById('childTickets');
    const totalOutput = document.getElementById('totalAmount');

    // Get values and convert to numbers (treat empty/invalid as 0)
    const numAdults = parseInt(adultInput.value) || 0;
    const numChildren = parseInt(childInput.value) || 0;

    // Ensure non-negative values (though min="0" helps)
    const validAdults = Math.max(0, numAdults);
    const validChildren = Math.max(0, numChildren);

    const totalCost = (validAdults * adultPrice) + (validChildren * childPrice);

    // Display the total amount in the text box
    totalOutput.value = totalCost.toFixed(2); // Format to 2 decimal places like currency
}

// Get the button element
const totalButton = document.getElementById('totalButton');

// Add event listener to the button - runs calculateTotal when clicked
if (totalButton) {
    totalButton.addEventListener('click', calculateTotal);
} else {
    console.error("Total button not found!");
}

// Optional: Initial calculation on load if needed, though usually done on button click
// calculateTotal();