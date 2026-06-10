document.getElementById('calculate-investment').addEventListener('click', function() {
const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
const years = parseFloat(document.getElementById('investment-years').value);
const expectedReturn = parseFloat(document.getElementById('expected-return').value) / 100

    const months = years * 12;
const monthlyRate = expectedReturn / 12

    let futureValue = initialInvestment * Math.pow(1 + monthlyRate, months)

    if (monthlyContribution > 0) {
    futureValue += monthlyContribution * 
        (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
}


const totalContributions = initialInvestment + (monthlyContribution * months);
const totalInterest = futureValue - totalContributions

    document.getElementById('future-value').textContent = '$' + futureValue.toFixed(2);
document.getElementById('total-contributions').textContent = '$' + totalContributions.toFixed(2);
document.getElementById('total-interest').textContent = '$' + totalInterest.toFixed(2);
document.getElementById('result-container').classList.add('active');




});


