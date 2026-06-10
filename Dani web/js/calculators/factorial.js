document.addEventListener('DOMContentLoaded', function() {
const calculateFactorialBtn = document.getElementById('calculate-factorial');
const calculatePermutationBtn = document.getElementById('calculate-permutation');
const calculateCombinationBtn = document.getElementById('calculate-combination')

    calculateFactorialBtn.addEventListener('click', function() {
    const n = parseInt(document.getElementById('number-input').value)

        if (isNaN(n) || n < 0) {
        alert('Please enter a valid non-negative integer');
        return;
    }


    if (n > 170) {
        alert('Number too large. Maximum value is 170 due to JavaScript number limitations.');
        return;
    }


    const result = factorial(n);
    const calculation = getFactorialCalculation(n);
    const scientific = result.toExponential(6)

        document.getElementById('factorial-result').textContent = `${n}! = ${formatLargeNumber(result)}`;
    document.getElementById('factorial-calculation').textContent = calculation;
    document.getElementById('scientific-notation').textContent = scientific

        document.getElementById('result-container').style.display = 'block';
})

    calculatePermutationBtn.addEventListener('click', function() {
    const n = parseInt(document.getElementById('n-value').value);
    const r = parseInt(document.getElementById('r-value').value)

        if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
        alert('Please enter valid values where 0 ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ r ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ n');
        return;
    }


    if (n > 170) {
        alert('n value too large. Maximum value is 170 due to JavaScript number limitations.');
        return;
    }


    const result = permutations(n, r);
    document.getElementById('permutation-value').textContent = `${n}P${r} = ${formatLargeNumber(result)}`;
    document.getElementById('permutation-result').style.display = 'block';
})

    calculateCombinationBtn.addEventListener('click', function() {
    const n = parseInt(document.getElementById('n-value').value);
    const r = parseInt(document.getElementById('r-value').value)

        if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
        alert('Please enter valid values where 0 ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ r ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ n');
        return;
    }


    if (n > 170) {
        alert('n value too large. Maximum value is 170 due to JavaScript number limitations.');
        return;
    }


    const result = combinations(n, r);
    document.getElementById('combination-value').textContent = `${n}C${r} = ${formatLargeNumber(result)}`;
    document.getElementById('combination-result').style.display = 'block';
})


function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}







function getFactorialCalculation(n) {
    if (n === 0) return "0! = 1 (by definition)";
    if (n === 1) return "1! = 1"

        let calculation = `${n}! = `;
    for (let i = n; i >= 1; i--) {
        calculation += i;
        if (i > 1) calculation += " ÃƒÆ’Ã¢â‚¬â€ ";
    }
    calculation += ` = ${formatLargeNumber(factorial(n))}`;
    return calculation;
}







function permutations(n, r) {
    return factorial(n) / factorial(n - r);
}







function combinations(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}







function formatLargeNumber(num) {
    if (num < 1000000) return num.toLocaleString()

        // For very large numbers, use scientific notation
    return num.toExponential(6).replace('e+', ' ÃƒÆ’Ã¢â‚¬â€ 10^');
}




});


