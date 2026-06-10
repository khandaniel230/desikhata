document.addEventListener('DOMContentLoaded', function() {
const tempInput = document.getElementById('temperature');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const convertBtn = document.getElementById('convert-temp');
const resultContainer = document.getElementById('result-container');
const convertedTemp = document.getElementById('converted-temp')

    convertBtn.addEventListener('click', convertTemperature)


function convertTemperature() {
    const temp = parseFloat(tempInput.value)

        if (isNaN(temp)) {
        alert('Please enter a valid temperature');
        return;
    }


    // First convert to Celsius if needed
    let celsius;
    switch(fromUnit.value) {
        case 'celsius':
            celsius = temp;
            break;
        case 'fahrenheit':
            celsius = (temp - 32) * 5/9;
            break;
        case 'kelvin':
            celsius = temp - 273.15;
            break;
    }


    // Then convert to target unit
    let result;
    switch(toUnit.value) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = (celsius * 9/5) + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15;
            break;
    }


    convertedTemp.textContent = result.toFixed(2);
    resultContainer.classList.add('active');
}




})

