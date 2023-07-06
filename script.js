document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating user authentication
    if (username === 'demo' && password === 'password') {
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
        document.getElementById('loginForm').reset();
    }
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const vehicleType = document.getElementById('vehicleType').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;

    // Simulating order submission
    alert(`Order placed for ${quantity} liters of petrol to ${deliveryAddress} using a ${vehicleType}.`);
    document.getElementById('orderForm').reset();
});
