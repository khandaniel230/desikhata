document.addEventListener('DOMContentLoaded', function() {
// Income Tax Calculator
const calculateIncomeTaxBtn = document.getElementById('calculate-income-tax');
if (calculateIncomeTaxBtn) {
    calculateIncomeTaxBtn.addEventListener('click', calculateIncomeTax);
}


    // Sales Tax Calculator
const calculateSalesTaxBtn = document.getElementById('calculate-sales-tax');
if (calculateSalesTaxBtn) {
    calculateSalesTaxBtn.addEventListener('click', calculateSalesTax);
}



function calculateIncomeTax() {
    const annualIncome = parseFloat(document.getElementById('annual-income').value);
    const filingStatus = document.getElementById('filing-status-income').value;
    const taxYear = document.getElementById('tax-year-income').value

        if (isNaN(annualIncome) || annualIncome < 0) {
        alert('Please enter a valid annual income.');
        return;
    }


    // Standard deduction based on filing status and tax year
    let standardDeduction;
    if (taxYear === '2023') {
        switch(filingStatus) {
            case 'single':
                standardDeduction = 13850;
                break;
            case 'married':
                standardDeduction = 27700;
                break;
            case 'head':
                standardDeduction = 20800;
                break;
            default:
                standardDeduction = 13850;
        }
    } else { // 2022
        switch(filingStatus) {
            case 'single':
                standardDeduction = 12950;
                break;
            case 'married':
                standardDeduction = 25900;
                break;
            case 'head':
                standardDeduction = 19400;
                break;
            default:
                standardDeduction = 12950;
        }
    }


    const taxableIncome = Math.max(0, annualIncome - standardDeduction);
    const taxAmount = calculateTaxBasedOnBrackets(taxableIncome, filingStatus, taxYear);
    const effectiveTaxRate = (taxAmount / annualIncome) * 100

        document.getElementById('taxable-income').textContent = `$${taxableIncome.toFixed(2)}`;
    document.getElementById('estimated-income-tax').textContent = `$${taxAmount.toFixed(2)}`;
    document.getElementById('income-tax-rate').textContent = `${effectiveTaxRate.toFixed(2)}%`;
}



function calculateTaxBasedOnBrackets(income, filingStatus, year) {
    // Simplified tax brackets for demonstration
    // In a real application, you would use the actual tax brackets for the selected year
    let brackets

        if (year === '2023') {
        if (filingStatus === 'single') {
            brackets = [
                { limit: 11000, rate: 0.10 },
                { limit: 44725, rate: 0.12 },
                { limit: 95375, rate: 0.22 },
                { limit: 182100, rate: 0.24 },
                { limit: 231250, rate: 0.32 },
                { limit: 578125, rate: 0.35 },
                { limit: Infinity, rate: 0.37 }
            ];
        } else if (filingStatus === 'married') {
            brackets = [
                { limit: 22000, rate: 0.10 },
                { limit: 89450, rate: 0.12 },
                { limit: 190750, rate: 0.22 },
                { limit: 364200, rate: 0.24 },
                { limit: 462500, rate: 0.32 },
                { limit: 693750, rate: 0.35 },
                { limit: Infinity, rate: 0.37 }
            ];
        } else { // head of household
            brackets = [
                { limit: 15700, rate: 0.10 },
                { limit: 59850, rate: 0.12 },
                { limit: 95350, rate: 0.22 },
                { limit: 182100, rate: 0.24 },
                { limit: 231250, rate: 0.32 },
                { limit: 578100, rate: 0.35 },
                { limit: Infinity, rate: 0.37 }
            ];
        }
    } else { // 2022
        if (filingStatus === 'single') {
            brackets = [
                { limit: 10275, rate: 0.10 },
                { limit: 41775, rate: 0.12 },
                { limit: 89075, rate: 0.22 },
                { limit: 170050, rate: 0.24 },
                { limit: 215950, rate: 0.32 },
                { limit: 539900, rate: 0.35 },
                { limit: Infinity, rate: 0.37 }
            ];
        } else if (filingStatus === 'married') {
            brackets = [
                { limit: 20550, rate: 0.10 },
                { limit: 83550, rate: 0.12 },
                { limit: 178150, rate: 0.22 },
                { limit: 340100, rate: 0.24 },
                { limit: 431900, rate: 0.32 },
                { limit: 647850, rate: 0.35 },
                { limit: Infinity, rate: 0.37 }
            ];
        } else { // head of household
            brackets = [
                { limit: 14650, rate: 0.10 },
                { limit: 55900, rate: 0.12 },
                { limit: 89050, rate: 0.22 },
                { limit: 170050, rate: 0.24 },
                { limit: 215950, rate: 0.32 },
                { limit: 539900, rate: 0.35 },
                { limit: Infinity, rate: 0.37 }
            ];
        }
    }


    let tax = 0;
    let previousLimit = 0

        for (const bracket of brackets) {
        if (income > previousLimit) {
            const taxableAmount = Math.min(income, bracket.limit) - previousLimit;
            tax += taxableAmount * bracket.rate;
            previousLimit = bracket.limit;
        } else {
            break;
        }
    }


    return tax;
}



function calculateSalesTax() {
    const itemPrice = parseFloat(document.getElementById('item-price').value);
    const taxRate = parseFloat(document.getElementById('tax-rate-sales').value);
    const quantity = parseInt(document.getElementById('quantity').value) || 1

        if (isNaN(itemPrice) || itemPrice < 0) {
        alert('Please enter a valid item price.');
        return;
    }


    if (isNaN(taxRate) || taxRate < 0) {
        alert('Please enter a valid tax rate.');
        return;
    }


    const subtotal = itemPrice * quantity;
    const taxAmount = subtotal * (taxRate / 100);
    const totalPrice = subtotal + taxAmount

        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('sales-tax-amount').textContent = `$${taxAmount.toFixed(2)}`;
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}




});


