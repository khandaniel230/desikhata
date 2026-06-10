document.addEventListener('DOMContentLoaded', function() {
const loanAmount = document.getElementById('loan-amount');
const interestRate = document.getElementById('interest-rate');
const loanTerm = document.getElementById('loan-term');
const termUnit = document.getElementById('term-unit');
const calculateBtn = document.getElementById('calculate-loan');
const resultContainer = document.getElementById('result-container');
const monthlyPayment = document.getElementById('monthly-payment');
const totalInterest = document.getElementById('total-interest');
const totalPayment = document.getElementById('total-payment')

    calculateBtn.addEventListener('click', calculateLoan)


function calculateLoan() {
    // Get input values
    const amount = parseFloat(loanAmount.value);
    const rate = parseFloat(interestRate.value) / 100 / 12; // Monthly rate
    let term = parseFloat(loanTerm.value)

        // Convert term to months if in years
    if (termUnit.value === 'years') {
        term = term * 12;
    }


    // Validate inputs
    if (isNaN(amount) || isNaN(rate) || isNaN(term) || amount <= 0 || term <= 0) {
        alert('Please enter valid loan values');
        return;
    }


    // Calculate monthly payment
    const monthly = (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1)

        // Calculate total payment and interest
    const total = monthly * term;
    const interest = total - amount

        // Display results
    monthlyPayment.textContent = '$' + monthly.toFixed(2);
    totalInterest.textContent = '$' + interest.toFixed(2);
    totalPayment.textContent = '$' + total.toFixed(2);
    resultContainer.classList.add('active');
}




});


