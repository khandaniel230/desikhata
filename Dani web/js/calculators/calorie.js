document.getElementById('calculate-calories').addEventListener('click', function() {
const age = parseInt(document.getElementById('age').value);
const gender = document.getElementById('gender').value;
const height = parseFloat(document.getElementById('height').value);
const heightUnit = document.getElementById('height-unit').value;
const weight = parseFloat(document.getElementById('weight').value);
const weightUnit = document.getElementById('weight-unit').value;
const activity = document.getElementById('activity').value;
const goal = document.getElementById('goal').value

    if (!age || !height || !weight || age <= 0 || height <= 0 || weight <= 0) {
    alert("Please enter valid values for all fields");
    return;
}


// Convert height to cm if in feet
let heightCm = height;
if (heightUnit === 'ft') {
    heightCm = height * 30.48; // 1 foot = 30.48 cm
}


// Convert weight to kg if in lbs
let weightKg = weight;
if (weightUnit === 'lbs') {
    weightKg = weight * 0.453592;
}


// Calculate BMR using Mifflin-St Jeor Equation
let bmr;
if (gender === 'male') {
    bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
} else {
    bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
}


// Activity multipliers
const activityMultipliers = {
    'sedentary': 1.2,
    'light': 1.375,
    'moderate': 1.55,
    'active': 1.725,
    'very-active': 1.9
}

    // Calculate TDEE (Total Daily Energy Expenditure)
let tdee = bmr * activityMultipliers[activity]

    // Adjust for goal
if (goal === 'lose') {
    tdee -= 500; // 500 calorie deficit for weight loss
} else if (goal === 'gain') {
    tdee += 500; // 500 calorie surplus for weight gain
}


// Round to nearest whole number
bmr = Math.round(bmr);
tdee = Math.round(tdee)

    // Calculate macronutrient split (40% carbs, 30% protein, 30% fat)
const protein = Math.round((tdee * 0.3) / 4); // 4 calories per gram
const carbs = Math.round((tdee * 0.4) / 4);   // 4 calories per gram
const fat = Math.round((tdee * 0.3) / 9);     // 9 calories per gram


// Generate recommendations
let tips = "";
if (goal === 'maintain') {
    tips = "Focus on balanced meals with plenty of fruits, vegetables, and lean proteins.";
} else if (goal === 'lose') {
    tips = "Combine this calorie target with regular exercise. Focus on nutrient-dense foods to stay full.";
} else {
    tips = "Aim for calorie-dense healthy foods like nuts, avocados, and whole grains. Include strength training.";
}


document.getElementById('bmr').textContent = bmr + ' calories';
document.getElementById('calories').textContent = tdee + ' calories/day';
document.getElementById('macros').textContent = `Protein: ${protein}g, Carbs: ${carbs}g, Fat: ${fat}g`;
document.getElementById('calorie-tips').textContent = tips;
document.getElementById('result-container').classList.add('active');




});


