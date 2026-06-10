document.addEventListener('DOMContentLoaded', function() {
const heightInput = document.getElementById('height');
const heightUnit = document.getElementById('height-unit');
const weightInput = document.getElementById('weight');
const weightUnit = document.getElementById('weight-unit');
const calculateBtn = document.getElementById('calculate-bmi');
const resultContainer = document.getElementById('result-container');
const bmiResult = document.getElementById('bmi-result');
const bmiCategory = document.getElementById('bmi-category')

    calculateBtn.addEventListener('click', calculateBMI)


function calculateBMI() {
    // Get input values
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value)

        // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values');
        return;
    }


    // Convert all units to metric (kg and m)
    const heightInMeters = convertHeightToMeters(height, heightUnit.value);
    const weightInKg = convertWeightToKg(weight, weightUnit.value)

        // Calculate BMI
    const bmi = weightInKg / (heightInMeters * heightInMeters)

        // Display result
    bmiResult.textContent = bmi.toFixed(1);
    bmiCategory.textContent = getBMICategory(bmi);
    resultContainer.classList.add('active');
}







function convertHeightToMeters(height, unit) {
    switch(unit) {
        case 'cm':
            return height / 100;
        case 'in':
            return height * 0.0254;
        case 'ft':
            return height * 0.3048;
        case 'm':
            return height;
        default:
            return height / 100; // default to cm
    }
}







function convertWeightToKg(weight, unit) {
    switch(unit) {
        case 'kg':
            return weight;
        case 'lb':
            return weight * 0.453592;
        case 'st':
            return weight * 6.35029;
        default:
            return weight; // default to kg
    }
}







function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}




});


