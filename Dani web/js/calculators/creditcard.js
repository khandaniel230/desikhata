document.getElementById('calculate-payoff').addEventListener('click', function() {
const balance = parseFloat(document.getElementById('balance').value);
const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
const monthlyPayment = parseFloat(document.getElementById('payment').value)

    if (monthlyPayment <= 0) {
    alert("Monthly payment must be greater than $0");
    return;
}


let remainingBalance = balance;
let months = 0;
let totalInterest = 0

    while (remainingBalance > 0 && months < 600) { // 50 year max to prevent infinite loops
    const monthlyInterest = remainingBalance * (interestRate / 12);
    totalInterest += monthlyInterest

        remainingBalance = remainingBalance + monthlyInterest - monthlyPayment;
    months++

        if (remainingBalance < 0) {
        remainingBalance = 0;
    }
}


if (months >= 600) {
    document.getElementById('months-to-payoff').textContent = "Never (payment too low)";
    document.getElementById('total-interest').textContent = "$" + totalInterest.toFixed(2);
    document.getElementById('total-payment').textContent = "$" + (balance + totalInterest).toFixed(2);
} else {
    document.getElementById('months-to-payoff').textContent = months + " months (" + Math.round(months/12*10)/10 + " years)";
    document.getElementById('total-interest').textContent = "$" + totalInterest.toFixed(2);
    document.getElementById('total-payment').textContent = "$" + (balance + totalInterest).toFixed(2);
}


document.getElementById('result-container').classList.add('active');




});


