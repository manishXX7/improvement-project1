document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;


    let confirmationMessage;
    if (itemName !== '' && quantity > 0) {
        let totalCost = quantity * 5; 
        confirmationMessage = `Thank you for ordering ${quantity} ${itemName}(s). Total cost: $${totalCost}`;
    } else {
        confirmationMessage = 'Please enter a valid item name and quantity.';
    }

    document.getElementById('orderConfirmation').innerText = confirmationMessage;
});

document.getElementById('quantity').addEventListener('input', function(event) {
    const quantityInput = event.target;
    let quantity = parseInt(quantityInput.value, 10);

    // Ensure quantity is a non-negative integer
    quantity = (Number.isInteger(quantity) && quantity >= 0) ? quantity : 0;
    quantityInput.value = quantity;
});