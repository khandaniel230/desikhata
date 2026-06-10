document.addEventListener('DOMContentLoaded', function() {
    const calcType = document.getElementById('calculation-type');
    const dynamicInputs = document.getElementById('dynamic-inputs');
    const calculateBtn = document.getElementById('calculate-percentage');
    const resultContainer = document.getElementById('result-container');
    const resultLabel = document.getElementById('result-label');
    const percentageResult = document.getElementById('percentage-result')

    calcType.addEventListener('change', updateInputs);
    calculateBtn.addEventListener('click', calculatePercentage)

function updateInputs() {
        dynamicInputs.innerHTML = ''

        switch(calcType.value) {
            case 'find-percentage':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="x-value-group">
                        <label for="x-value">Percentage (X)</label>
                        <input type="number" id="x-value" placeholder="Enter percentage">
                    </div>
                    <div class="input-group" id="y-value-group">
                        <label for="y-value">Base Value (Y)</label>
                        <input type="number" id="y-value" placeholder="Enter base value">
                    </div>
                `;
                resultLabel.textContent = 'Result:';
                break

            case 'find-percent':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="x-value-group">
                        <label for="x-value">Partial Value (X)</label>
                        <input type="number" id="x-value" placeholder="Enter partial value">
                    </div>
                    <div class="input-group" id="y-value-group">
                        <label for="y-value">Total Value (Y)</label>
                        <input type="number" id="y-value" placeholder="Enter total value">
                    </div>
                `;
                resultLabel.textContent = 'Result:';
                break

            case 'increase':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="x-value-group">
                        <label for="x-value">Percentage Increase (X)</label>
                        <input type="number" id="x-value" placeholder="Enter percentage">
                    </div>
                    <div class="input-group" id="y-value-group">
                        <label for="y-value">Base Value (Y)</label>
                        <input type="number" id="y-value" placeholder="Enter base value">
                    </div>
                `;
                resultLabel.textContent = 'Increased Value:';
                break

            case 'decrease':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="x-value-group">
                        <label for="x-value">Percentage Decrease (X)</label>
                        <input type="number" id="x-value" placeholder="Enter percentage">
                    </div>
                    <div class="input-group" id="y-value-group">
                        <label for="y-value">Base Value (Y)</label>
                        <input type="number" id="y-value" placeholder="Enter base value">
                    </div>
                `;
                resultLabel.textContent = 'Decreased Value:';
                break

            case 'difference':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="x-value-group">
                        <label for="x-value">First Value (X)</label>
                        <input type="number" id="x-value" placeholder="Enter first value">
                    </div>
                    <div class="input-group" id="y-value-group">
                        <label for="y-value">Second Value (Y)</label>
                        <input type="number" id="y-value" placeholder="Enter second value">
                    </div>
                `;
                resultLabel.textContent = 'Percentage Difference:';
                break;
        }
    }

function calculatePercentage() {
        const x = parseFloat(document.getElementById('x-value').value);
        const y = parseFloat(document.getElementById('y-value').value)

        if (isNaN(x) || isNaN(y) || y <= 0) {
            alert('Please enter valid values');
            return;
        }

        let result

        switch(calcType.value) {
            case 'find-percentage':
                result = (x / 100) * y;
                break

            case 'find-percent':
                result = (x / y) * 100;
                break

            case 'increase':
                result = y * (1 + (x / 100));
                break

            case 'decrease':
                result = y * (1 - (x / 100));
                break

            case 'difference':
                result = (Math.abs(x - y) / ((x + y) / 2)) * 100;
                break;
        }

        if (calcType.value === 'find-percent' || calcType.value === 'difference') {
            percentageResult.textContent = result.toFixed(2) + '%';
        } else {
            percentageResult.textContent = result.toFixed(2);
        }

        resultContainer.classList.add('active');
    }

    // Initialize inputs
    updateInputs();
});
