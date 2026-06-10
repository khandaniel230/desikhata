document.addEventListener('DOMContentLoaded', function() {
const calculateBtn = document.getElementById('calculate-quadratic');
const resultContainer = document.getElementById('result-container')

    calculateBtn.addEventListener('click', function() {
    const a = parseFloat(document.getElementById('coefficient-a').value);
    const b = parseFloat(document.getElementById('coefficient-b').value);
    const c = parseFloat(document.getElementById('coefficient-c').value)

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Please enter valid numbers for all coefficients');
        return;
    }


    if (a === 0) {
        alert('Coefficient a cannot be zero for a quadratic equation');
        return;
    }


    // Calculate discriminant
    const discriminant = b * b - 4 * a * c

        // Display equation
    let equationText = `${formatCoefficient(a)}xÃƒâ€šÃ‚Â² ${formatCoefficient(b, true)}x ${formatCoefficient(c, true)} = 0`;
    document.getElementById('equation-display').textContent = equationText

        // Display discriminant
    document.getElementById('discriminant').textContent = discriminant.toFixed(4)

        // Calculate and display roots
    let rootsText, stepsText

        if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        rootsText = `x = ${root1.toFixed(4)}, x = ${root2.toFixed(4)}`

            stepsText = `Discriminant D = bÃƒâ€šÃ‚Â² - 4ac = ${b}Ãƒâ€šÃ‚Â² - 4*${a}*${c} = ${discriminant} (positive)
        ÃƒÂ¢Ã‹â€ Ã…Â¡D = ${Math.sqrt(discriminant).toFixed(4)}
        x = [-${b} Ãƒâ€šÃ‚Â± ${Math.sqrt(discriminant).toFixed(4)}] / (2*${a})
        xÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â = [${-b} + ${Math.sqrt(discriminant).toFixed(4)}] / ${2*a} = ${root1.toFixed(4)}
        xÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡ = [${-b} - ${Math.sqrt(discriminant).toFixed(4)}] / ${2*a} = ${root2.toFixed(4)}`;
    } 
    else if (discriminant === 0) {
        const root = -b / (2 * a);
        rootsText = `x = ${root.toFixed(4)} (double root)`

            stepsText = `Discriminant D = bÃƒâ€šÃ‚Â² - 4ac = ${b}Ãƒâ€šÃ‚Â² - 4*${a}*${c} = ${discriminant} (zero)
        x = -b / (2a) = -${b} / (2*${a}) = ${root.toFixed(4)}`;
    } 
    else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        rootsText = `x = ${realPart.toFixed(4)} Ãƒâ€šÃ‚Â± ${imaginaryPart.toFixed(4)}i`

            stepsText = `Discriminant D = bÃƒâ€šÃ‚Â² - 4ac = ${b}Ãƒâ€šÃ‚Â² - 4*${a}*${c} = ${discriminant} (negative)
        Real part = -b / (2a) = -${b} / (2*${a}) = ${realPart.toFixed(4)}
        Imaginary part = ÃƒÂ¢Ã‹â€ Ã…Â¡|D| / (2a) = ÃƒÂ¢Ã‹â€ Ã…Â¡${-discriminant} / ${2*a} = ${imaginaryPart.toFixed(4)}
        x = ${realPart.toFixed(4)} Ãƒâ€šÃ‚Â± ${imaginaryPart.toFixed(4)}i`;
    }


    document.getElementById('roots').textContent = rootsText;
    document.getElementById('solution-steps').textContent = stepsText

        resultContainer.style.display = 'block';
})


function formatCoefficient(value, withSign = false) {
    if (value === 1 && !withSign) return '';
    if (value === -1) return '-';
    if (value > 0 && withSign) return `+ ${value}`;
    if (value < 0) return `- ${Math.abs(value)}`;
    return value.toString();
}




});


