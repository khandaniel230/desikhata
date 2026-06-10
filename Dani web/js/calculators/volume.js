document.addEventListener('DOMContentLoaded', function() {
const shapeSelect = document.getElementById('shape');
const shapeInputs = document.getElementById('shape-inputs');
const unitSelect = document.getElementById('unit');
const calculateBtn = document.getElementById('calculate-volume');
const resultContainer = document.getElementById('result-container');
const volumeResult = document.getElementById('volume-result')

    // Update inputs based on shape selection
shapeSelect.addEventListener('change', updateShapeInputs);
calculateBtn.addEventListener('click', calculateVolume)


function updateShapeInputs() {
    shapeInputs.innerHTML = ''

        switch(shapeSelect.value) {
        case 'cube':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="side">Side Length</label>
                    <input type="number" id="side" placeholder="Enter side length">
                </div>
            `;
            break

            case 'rectangular-prism':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="length">Length</label>
                    <input type="number" id="length" placeholder="Enter length">
                </div>
                <div class="input-group">
                    <label for="width">Width</label>
                    <input type="number" id="width" placeholder="Enter width">
                </div>
                <div class="input-group">
                    <label for="height">Height</label>
                    <input type="number" id="height" placeholder="Enter height">
                </div>
            `;
            break

            case 'cylinder':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="radius">Radius</label>
                    <input type="number" id="radius" placeholder="Enter radius">
                </div>
                <div class="input-group">
                    <label for="height">Height</label>
                    <input type="number" id="height" placeholder="Enter height">
                </div>
            `;
            break

            case 'sphere':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="radius">Radius</label>
                    <input type="number" id="radius" placeholder="Enter radius">
                </div>
            `;
            break

            case 'cone':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="radius">Radius</label>
                    <input type="number" id="radius" placeholder="Enter radius">
                </div>
                <div class="input-group">
                    <label for="height">Height</label>
                    <input type="number" id="height" placeholder="Enter height">
                </div>
            `;
            break

            case 'pyramid':
            shapeInputs.innerHTML = `
                <div class="input-group">
                    <label for="base-length">Base Length</label>
                    <input type="number" id="base-length" placeholder="Enter base length">
                </div>
                <div class="input-group">
                    <label for="base-width">Base Width</label>
                    <input type="number" id="base-width" placeholder="Enter base width">
                </div>
                <div class="input-group">
                    <label for="height">Height</label>
                    <input type="number" id="height" placeholder="Enter height">
                </div>
            `;
            break;
    }
}



function calculateVolume() {
    let volume

        switch(shapeSelect.value) {
        case 'cube':
            const side = parseFloat(document.getElementById('side').value);
            if (isNaN(side) || side <= 0) {
                alert('Please enter valid side length');
                return;
            }
            volume = Math.pow(side, 3);
            break

            case 'rectangular-prism':
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            const height = parseFloat(document.getElementById('height').value);
            if (isNaN(length) || isNaN(width) || isNaN(height) || length <= 0 || width <= 0 || height <= 0) {
                alert('Please enter valid length, width and height');
                return;
            }
            volume = length * width * height;
            break

            case 'cylinder':
            const radius = parseFloat(document.getElementById('radius').value);
            const cylHeight = parseFloat(document.getElementById('height').value);
            if (isNaN(radius) || isNaN(cylHeight) || radius <= 0 || cylHeight <= 0) {
                alert('Please enter valid radius and height');
                return;
            }
            volume = Math.PI * Math.pow(radius, 2) * cylHeight;
            break

            case 'sphere':
            const sphereRadius = parseFloat(document.getElementById('radius').value);
            if (isNaN(sphereRadius) || sphereRadius <= 0) {
                alert('Please enter valid radius');
                return;
            }
            volume = (4/3) * Math.PI * Math.pow(sphereRadius, 3);
            break

            case 'cone':
            const coneRadius = parseFloat(document.getElementById('radius').value);
            const coneHeight = parseFloat(document.getElementById('height').value);
            if (isNaN(coneRadius) || isNaN(coneHeight) || coneRadius <= 0 || coneHeight <= 0) {
                alert('Please enter valid radius and height');
                return;
            }
            volume = (1/3) * Math.PI * Math.pow(coneRadius, 2) * coneHeight;
            break

            case 'pyramid':
            const baseLength = parseFloat(document.getElementById('base-length').value);
            const baseWidth = parseFloat(document.getElementById('base-width').value);
            const pyramidHeight = parseFloat(document.getElementById('height').value);
            if (isNaN(baseLength) || isNaN(baseWidth) || isNaN(pyramidHeight) || baseLength <= 0 || baseWidth <= 0 || pyramidHeight <= 0) {
                alert('Please enter valid base dimensions and height');
                return;
            }
            volume = (1/3) * baseLength * baseWidth * pyramidHeight;
            break;
    }


    // Convert to selected unit if needed
    volumeResult.textContent = volume.toFixed(2) + ' ' + getUnitName(unitSelect.value);
    resultContainer.classList.add('active');
}







function getUnitName(unit) {
    switch(unit) {
        case 'cubic-meter': return 'mÃƒâ€šÃ‚Â³';
        case 'cubic-centimeter': return 'cmÃƒâ€šÃ‚Â³';
        case 'liter': return 'L';
        case 'milliliter': return 'mL';
        case 'gallon': return 'gal';
        case 'quart': return 'qt';
        default: return '';
    }
}


// Initialize inputs
updateShapeInputs();




});


