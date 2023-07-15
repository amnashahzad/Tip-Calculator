function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers for bill amount and tip percentage.');
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('totalTip').innerText = `Tip Amount: $${tipAmount.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`;
}
