document.getElementById('calculate-tax').addEventListener('click', function() {
const filingStatus = document.getElementById('filing-status').value;
const income = parseFloat(document.getElementById('income').value);
const deductions = parseFloat(document.getElementById('deductions').value) || 0;
const taxYear = document.getElementById('tax-year').value

    const taxableIncome = Math.max(0, income - deductions);
let estimatedTax = 0

    // Simplified tax calculation (using 2023 single filer brackets as example)
if (filingStatus === 'single') {
    if (taxableIncome <= 10275) {
        estimatedTax = taxableIncome * 0.10;
    } else if (taxableIncome <= 41775) {
        estimatedTax = 1027.50 + (taxableIncome - 10275) * 0.12;
    } else if (taxableIncome <= 89075) {
        estimatedTax = 4807.50 + (taxableIncome - 41775) * 0.22;
    } else if (taxableIncome <= 170050) {
        estimatedTax = 15213.50 + (taxableIncome - 89075) * 0.24;
    } else if (taxableIncome <= 215950) {
        estimatedTax = 34647.50 + (taxableIncome - 170050) * 0.32;
    } else if (taxableIncome <= 539900) {
        estimatedTax = 49335.50 + (taxableIncome - 215950) * 0.35;
    } else {
        estimatedTax = 162718 + (taxableIncome - 539900) * 0.37;
    }
} else if (filingStatus === 'married') {
    // Married filing jointly brackets would go here
    estimatedTax = taxableIncome * 0.18; // Simplified for example
} else {
    // Head of household brackets would go here
    estimatedTax = taxableIncome * 0.16; // Simplified for example
}


const effectiveRate = (estimatedTax / income) * 100

    document.getElementById('taxable-income').textContent = '$' + taxableIncome.toFixed(2);
document.getElementById('estimated-tax').textContent = '$' + estimatedTax.toFixed(2);
document.getElementById('tax-rate').textContent = effectiveRate.toFixed(2) + '%';
document.getElementById('result-container').classList.add('active');




});


