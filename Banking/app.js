// Initial balance set to $1,000
let balance = 1000;

// Update the displayed balance
function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

// Deposit function
function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);

    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
        alert(`Successfully deposited $${depositAmount}`);
    } else {
        alert('Please enter a valid deposit amount');
    }

    // Clear the input field
    document.getElementById('deposit-amount').value = '';
}

// Withdraw function
function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);

    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalance();
            alert(`Successfully withdrew $${withdrawAmount}`);
        } else {
            alert('Insufficient balance for this withdrawal');
        }
    } else {
        alert('Please enter a valid withdrawal amount');
    }

    // Clear the input field
    document.getElementById('withdraw-amount').value = '';
}



