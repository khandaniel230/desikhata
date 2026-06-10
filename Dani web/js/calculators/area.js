document.addEventListener('DOMContentLoaded', function() {
const shapeSelect = document.getElementById('shape');
const shapeInputs = document.getElementById('shape-inputs');
const unitSelect = document.getElementById('unit');
const calculateBtn = document.getElementById('calculate-area');
const resultContainer = document.getElementById('result-container');
const areaResult = document.getElementById('area-result')

    // Update inputs based on shape selection
shapeSelect.addEventListener('change', updateShapeInputs);
calculateBtn.addEventListener('click', calculateArea)


function updateShapeInputs() {
    shapeInputs.innerHTML = ''

        switch(shapeSelect.value) {
        case 'square':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="side">Side Length</label>
                    <input type="number" id="side" placeholder="Enter side length">
                </div>
            `;
            break

            case 'rectangle':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="length">Length</label>
                    <input type="number" id="length" placeholder="Enter length">
                </div>
                <div class="input-group">
                    <label for="width">Width</label>
                    <input type="number" id="width" placeholder="Enter width">
                </div>
            `;
            break

            case 'circle':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="radius">Radius</label>
                    <input type="number" id="radius" placeholder="Enter radius">
                </div>
            `;
            break

            case 'triangle':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="base">Base</label>
                    <input type="number" id="base" placeholder="Enter base">
                </div>
                <div class="input-group">
                    <label for="height">Height</label>
                    <input type="number" id="height" placeholder="Enter height">
                </div>
            `;
            break

            case 'trapezoid':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="base1">Base 1</label>
                    <input type="number" id="base1" placeholder="Enter first base">
                </div>
                <div class="input-group">
                    <label for="base2">Base 2</label>
                    <input type="number" id="base2" placeholder="Enter second base">
                </div>
                <div class="input-group">
                    <label for="height">Height</label>
                    <input type="number" id="height" placeholder="Enter height">
                </div>
            `;
            break;
    }
}



function calculateArea() {
    let area

        switch(shapeSelect.value) {
        case 'square':
            const side = parseFloat(document.getElementById('side').value);
            if (isNaN(side) || side <= 0) {
                alert('Please enter valid side length');
                return;
            }
            area = side * side;
            break

            case 'rectangle':
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
                alert('Please enter valid length and width');
                return;
            }
            area = length * width;
            break

            case 'circle':
            const radius = parseFloat(document.getElementById('radius').value);
            if (isNaN(radius) || radius <= 0) {
                alert('Please enter valid radius');
                return;
            }
            area = Math.PI * radius * radius;
            break

            case 'triangle':
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
                alert('Please enter valid base and height');
                return;
            }
            area = 0.5 * base * height;
            break

            case 'trapezoid':
            const base1 = parseFloat(document.getElementById('base1').value);
            const base2 = parseFloat(document.getElementById('base2').value);
            const trapezoidHeight = parseFloat(document.getElementById('height').value);
            if (isNaN(base1) || isNaN(base2) || isNaN(trapezoidHeight) || base1 <= 0 || base2 <= 0 || trapezoidHeight <= 0) {
                alert('Please enter valid bases and height');
                return;
            }
            area = 0.5 * (base1 + base2) * trapezoidHeight;
            break;
    }


    // Convert to selected unit if needed (in this case, we're just displaying the raw area)
    areaResult.textContent = area.toFixed(2) + ' ' + getUnitName(unitSelect.value);
    resultContainer.classList.add('active');
}







function getUnitName(unit) {
    switch(unit) {
        case 'sqm': return 'mÃƒâ€šÃ‚Â²';
        case 'sqft': return 'ftÃƒâ€šÃ‚Â²';
        case 'sqin': return 'inÃƒâ€šÃ‚Â²';
        case 'hectare': return 'hectares';
        case 'acre': return 'acres';
        default: return '';
    }
}


// Initialize inputs
updateShapeInputs();




});


