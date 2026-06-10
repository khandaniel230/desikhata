document.addEventListener('DOMContentLoaded', function() {
const calculateBtn = document.getElementById('calculate-pythagorean');
const findSideRadios = document.querySelectorAll('input[name="find-side"]');
const legAGroup = document.getElementById('leg-a-group');
const legBGroup = document.getElementById('leg-b-group');
const hypotenuseGroup = document.getElementById('hypotenuse-group');
const resultContainer = document.getElementById('result-container')

    // Toggle input fields based on selection
findSideRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'hypotenuse') {
            legAGroup.style.display = 'block';
            legBGroup.style.display = 'block';
            hypotenuseGroup.style.display = 'none';
        } else {
            legAGroup.style.display = 'block';
            legBGroup.style.display = 'none';
            hypotenuseGroup.style.display = 'block';
        }
    });
})

    calculateBtn.addEventListener('click', function() {
    const findHypotenuse = document.querySelector('input[name="find-side"]:checked').value === 'hypotenuse'

        let a, b, c, result, calculation, triangleType

        if (findHypotenuse) {
        a = parseFloat(document.getElementById('leg-a').value);
        b = parseFloat(document.getElementById('leg-b').value)

            if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            alert('Please enter valid positive numbers for both legs');
            return;
        }


        c = Math.sqrt(a * a + b * b);
        result = `Hypotenuse (c) = ${c.toFixed(4)}`;
        calculation = `c = ÃƒÂ¢Ã‹â€ Ã…Â¡(aÃƒâ€šÃ‚Â² + bÃƒâ€šÃ‚Â²) = ÃƒÂ¢Ã‹â€ Ã…Â¡(${a}Ãƒâ€šÃ‚Â² + ${b}Ãƒâ€šÃ‚Â²) = ÃƒÂ¢Ã‹â€ Ã…Â¡(${a*a} + ${b*b}) = ÃƒÂ¢Ã‹â€ Ã…Â¡${a*a + b*b} = ${c.toFixed(4)}`;
    } else {
        a = parseFloat(document.getElementById('leg-a').value);
        c = parseFloat(document.getElementById('hypotenuse').value)

            if (isNaN(a) || isNaN(c) || a <= 0 || c <= 0) {
            alert('Please enter valid positive numbers');
            return;
        }


        if (a >= c) {
            alert('Leg must be shorter than hypotenuse');
            return;
        }


        b = Math.sqrt(c * c - a * a);
        result = `Leg (b) = ${b.toFixed(4)}`;
        calculation = `b = ÃƒÂ¢Ã‹â€ Ã…Â¡(cÃƒâ€šÃ‚Â² - aÃƒâ€šÃ‚Â²) = ÃƒÂ¢Ã‹â€ Ã…Â¡(${c}Ãƒâ€šÃ‚Â² - ${a}Ãƒâ€šÃ‚Â²) = ÃƒÂ¢Ã‹â€ Ã…Â¡(${c*c} - ${a*a}) = ÃƒÂ¢Ã‹â€ Ã…Â¡${c*c - a*a} = ${b.toFixed(4)}`;
    }


    // Determine triangle type
    if (findHypotenuse) {
        if (a === b) {
            triangleType = "Isosceles right triangle";
        } else {
            triangleType = "Right triangle";
        }
    } else {
        const sides = [a, b, c].sort((x, y) => x - y);
        if (sides[0] === sides[1]) {
            triangleType = "Isosceles right triangle";
        } else {
            triangleType = "Right triangle";
        }
    }


    document.getElementById('missing-side').textContent = result;
    document.getElementById('calculation').textContent = calculation;
    document.getElementById('triangle-type').textContent = triangleType

        resultContainer.style.display = 'block';
});




});


