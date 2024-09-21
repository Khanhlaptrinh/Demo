const Tyle = {
    VND: {
        USD: 0.000041
    },
    USD: {
        VND: 23000
    }
};

document.getElementById('convertBtn').addEventListener('click', function () {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    if (amount === '' || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Result: ${amount} ${toCurrency}`;
        return;
    }

    const rate = Tyle[fromCurrency][toCurrency];

    if (!rate) {
        alert('Conversion rate not available for this currency pair.');
        return;
    }

    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `Result: ${convertedAmount} ${toCurrency}`;
});