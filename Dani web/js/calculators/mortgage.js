document.getElementById('calculate-mortgage').addEventListener('click', function() {
const homePrice = parseFloat(document.getElementById('home-price').value);
const downPayment = parseFloat(document.getElementById('down-payment').value);
const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
const loanTerm = parseFloat(document.getElementById('loan-term').value)

    const principal = homePrice - downPayment;
const monthlyRate = interestRate / 12;
const numberOfPayments = loanTerm * 12

    const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalPayment = monthlyPayment * numberOfPayments;
const totalInterest = totalPayment - principal

    document.getElementById('monthly-payment').textContent = '$' + monthlyPayment.toFixed(2);
document.getElementById('total-interest').textContent = '$' + totalInterest.toFixed(2);
document.getElementById('total-payment').textContent = '$' + totalPayment.toFixed(2);
document.getElementById('result-container').classList.add('active');




});


