document.addEventListener('DOMContentLoaded', function() {
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-currency');
const resultContainer = document.getElementById('result-container');
const convertedAmount = document.getElementById('converted-amount');
const exchangeRate = document.getElementById('exchange-rate');
const updateDate = document.getElementById('update-date')

    // Sample exchange rates (in a real app, you'd fetch these from an API)
const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.25,
    CAD: 1.25,
    AUD: 1.30,
    CNY: 6.45,
    INR: 74.50
}

    // Set last updated date
updateDate.textContent = new Date().toLocaleDateString()

    convertBtn.addEventListener('click', convertCurrency)


function convertCurrency() {
    const amount = parseFloat(amountInput.value)

        if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }


    const from = fromCurrency.value;
    const to = toCurrency.value

        // Convert to USD first, then to target currency
    const amountInUSD = amount / rates[from];
    const result = amountInUSD * rates[to]

        convertedAmount.textContent = result.toFixed(2) + ' ' + to;
    exchangeRate.textContent = `Exchange rate: 1 ${from} = ${(rates[to]/rates[from]).toFixed(4)} ${to}`;
    resultContainer.classList.add('active');
}




});


