document.getElementById('calculate-water').addEventListener('click', function() {
const weight = parseFloat(document.getElementById('weight').value);
const weightUnit = document.getElementById('weight-unit').value;
const activityLevel = document.getElementById('activity-level').value;
const climate = document.getElementById('climate').value

    if (!weight || weight <= 0) {
    alert("Please enter a valid weight");
    return;
}


// Convert weight to kg if in lbs
let weightKg = weight;
if (weightUnit === 'lbs') {
    weightKg = weight * 0.453592;
}


// Base calculation: 30-35ml per kg
let baseWater = weightKg * 0.033; // Average of 33ml per kg


// Adjust for activity level
const activityMultipliers = {
    'sedentary': 1.0,
    'light': 1.1,
    'moderate': 1.2,
    'active': 1.3,
    'very-active': 1.5
}

    // Adjust for climate
const climateMultipliers = {
    'temperate': 1.0,
    'hot': 1.2,
    'dry': 1.3
}

    let totalWater = baseWater * activityMultipliers[activityLevel] * climateMultipliers[climate]

    // Round to 1 decimal place
totalWater = Math.round(totalWater * 10) / 10

    // Calculate glasses (assuming 250ml per glass)
const glasses = Math.round(totalWater * 4)

    // Generate hydration tips
let tips = "";
if (totalWater < 2) {
    tips = "Try to increase your water intake gradually. Start with an extra glass in the morning!";
} else if (totalWater >= 2 && totalWater < 3) {
    tips = "Good baseline! Remember to drink more during exercise or hot weather.";
} else {
    tips = "Excellent hydration goal! Keep a water bottle handy to maintain this throughout the day.";
}


document.getElementById('water-intake').textContent = totalWater + ' L';
document.getElementById('glasses').textContent = glasses + ' glasses (250ml each)';
document.getElementById('hydration-tips').textContent = tips;
document.getElementById('result-container').classList.add('active');




});


