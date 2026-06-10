document.addEventListener('DOMContentLoaded', function() {

const weightInput = document.getElementById('weight');

const fromUnit = document.getElementById('from-unit');

const toUnit = document.getElementById('to-unit');

const convertBtn = document.getElementById('convert-weight');

const resultContainer = document.getElementById('result-container');

const convertedWeight = document.getElementById('converted-weight')


    convertBtn.addEventListener('click', convertWeight)



function convertWeight() {

    const weight = parseFloat(weightInput.value)


        if (isNaN(weight)) {

        alert('Please enter a valid weight');

        return;

    }



    // First convert to kilograms if needed

    let kg;

    switch(fromUnit.value) {

        case 'kg':

            kg = weight;

            break;

        case 'g':

            kg = weight / 1000;

            break;

        case 'mg':

            kg = weight / 1000000;

            break;

        case 'lb':

            kg = weight * 0.453592;

            break;

        case 'oz':

            kg = weight * 0.0283495;

            break;

        case 'st':

            kg = weight * 6.35029;

            break;

    }



    // Then convert to target unit

    let result;

    switch(toUnit.value) {

        case 'kg':

            result = kg;

            break;

        case 'g':

            result = kg * 1000;

            break;

        case 'mg':

            result = kg * 1000000;

            break;

        case 'lb':

            result = kg / 0.453592;

            break;

        case 'oz':

            result = kg / 0.0283495;

            break;

        case 'st':

            result = kg / 6.35029;

            break;

    }



    convertedWeight.textContent = result.toFixed(2) + ' ' + getUnitName(toUnit.value);

    resultContainer.classList.add('active');

}








function getUnitName(unit) {

    switch(unit) {

        case 'kg': return 'kg';

        case 'g': return 'g';

        case 'mg': return 'mg';

        case 'lb': return 'lb';

        case 'oz': return 'oz';

        case 'st': return 'st';

        default: return '';

    }

}





});



