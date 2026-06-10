document.getElementById('calculate-retirement').addEventListener('click', function() {
const currentAge = parseInt(document.getElementById('current-age').value);
const retirementAge = parseInt(document.getElementById('retirement-age').value);
const currentSavings = parseFloat(document.getElementById('current-savings').value);
const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
const expectedReturn = parseFloat(document.getElementById('expected-return').value) / 100

    const years = retirementAge - currentAge;
const months = years * 12;
const monthlyRate = expectedReturn / 12

    let retirementSavings = currentSavings * Math.pow(1 + monthlyRate, months)

    if (monthlyContribution > 0) {
    retirementSavings += monthlyContribution * 
        (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
}


const totalContributions = currentSavings + (monthlyContribution * months)

    document.getElementById('retirement-savings').textContent = '$' + retirementSavings.toFixed(2);
document.getElementById('total-contributions').textContent = '$' + totalContributions.toFixed(2);
document.getElementById('years-to-retirement').textContent = years;
document.getElementById('result-container').classList.add('active');




});


