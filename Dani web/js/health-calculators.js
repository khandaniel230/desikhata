// Health Calculators JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Body Fat Calculator
    if (document.getElementById('bodyfat-form')) {
        document.getElementById('bodyfat-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const gender = document.getElementById('gender').value;
            const age = parseInt(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const neck = parseFloat(document.getElementById('neck').value);
            const waist = parseFloat(document.getElementById('waist').value);
            let hip = 0;
            
            if (gender === 'female') {
                hip = parseFloat(document.getElementById('hip').value);
            }
            
            let bodyFatPercentage;
            
            if (gender === 'male') {
                // US Navy method for men
                bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
            } else {
                // US Navy method for women
                bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
            }
            
            document.getElementById('bodyfat-result').textContent = bodyFatPercentage.toFixed(1) + '%';
            document.getElementById('bodyfat-result-container').classList.add('active');
        });
    }
    
    // BMR Calculator
    if (document.getElementById('bmr-form')) {
        document.getElementById('bmr-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const gender = document.getElementById('gender').value;
            const age = parseInt(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            
            let bmr;
            
            // Mifflin-St Jeor Equation
            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }
            
            document.getElementById('bmr-result').textContent = bmr.toFixed(0) + ' calories/day';
            document.getElementById('bmr-result-container').classList.add('active');
        });
    }
    
    // TDEE Calculator
    if (document.getElementById('tdee-form')) {
        document.getElementById('tdee-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bmr = parseFloat(document.getElementById('bmr').value);
            const activityLevel = parseFloat(document.getElementById('activity-level').value);
            
            const tdee = bmr * activityLevel;
            
            document.getElementById('tdee-result').textContent = tdee.toFixed(0) + ' calories/day';
            document.getElementById('tdee-result-container').classList.add('active');
        });
    }
    
    // Ideal Weight Calculator
    if (document.getElementById('idealweight-form')) {
        document.getElementById('idealweight-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const gender = document.getElementById('gender').value;
            const height = parseFloat(document.getElementById('height').value);
            
            let idealWeight;
            
            // Robinson formula
            if (gender === 'male') {
                idealWeight = 52 + 1.9 * ((height - 152.4) / 2.54);
            } else {
                idealWeight = 49 + 1.7 * ((height - 152.4) / 2.54);
            }
            
            document.getElementById('idealweight-result').textContent = idealWeight.toFixed(1) + ' kg';
            document.getElementById('idealweight-result-container').classList.add('active');
        });
    }
    
    // Pregnancy Calculator
    if (document.getElementById('pregnancy-form')) {
        document.getElementById('pregnancy-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const lastPeriod = new Date(document.getElementById('last-period').value);
            const cycleLength = parseInt(document.getElementById('cycle-length').value);
            
            // Calculate due date (Naegele's rule)
            const dueDate = new Date(lastPeriod);
            dueDate.setDate(dueDate.getDate() + 280);
            
            // Calculate current week
            const today = new Date();
            const diffTime = Math.abs(today - lastPeriod);
            const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
            
            document.getElementById('due-date').textContent = dueDate.toDateString();
            document.getElementById('current-week').textContent = diffWeeks + ' weeks';
            document.getElementById('pregnancy-result-container').classList.add('active');
        });
    }
    
    // Heart Rate Calculator
    if (document.getElementById('heartrate-form')) {
        document.getElementById('heartrate-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const age = parseInt(document.getElementById('age').value);
            const restingHR = parseInt(document.getElementById('resting-hr').value);
            
            // Calculate max HR (220 - age)
            const maxHR = 220 - age;
            
            // Calculate target zones (Karvonen formula)
            const zone1Min = Math.round((maxHR - restingHR) * 0.5 + restingHR);
            const zone1Max = Math.round((maxHR - restingHR) * 0.6 + restingHR);
            
            const zone2Min = Math.round((maxHR - restingHR) * 0.6 + restingHR);
            const zone2Max = Math.round((maxHR - restingHR) * 0.7 + restingHR);
            
            const zone3Min = Math.round((maxHR - restingHR) * 0.7 + restingHR);
            const zone3Max = Math.round((maxHR - restingHR) * 0.8 + restingHR);
            
            const zone4Min = Math.round((maxHR - restingHR) * 0.8 + restingHR);
            const zone4Max = Math.round((maxHR - restingHR) * 0.9 + restingHR);
            
            const zone5Min = Math.round((maxHR - restingHR) * 0.9 + restingHR);
            const zone5Max = maxHR;
            
            document.getElementById('max-hr').textContent = maxHR + ' bpm';
            document.getElementById('zone1').textContent = zone1Min + ' - ' + zone1Max + ' bpm';
            document.getElementById('zone2').textContent = zone2Min + ' - ' + zone2Max + ' bpm';
            document.getElementById('zone3').textContent = zone3Min + ' - ' + zone3Max + ' bpm';
            document.getElementById('zone4').textContent = zone4Min + ' - ' + zone4Max + ' bpm';
            document.getElementById('zone5').textContent = zone5Min + ' - ' + zone5Max + ' bpm';
            
            document.getElementById('heartrate-result-container').classList.add('active');
        });
    }
});

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    
     const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"], input[type="text"][placeholder*="calculate"]');
    const searchButtons = document.querySelectorAll('#search-btn, .search-btn');
   searchButtons.forEach((e)=>{
    e.style.display="none"

   })
   searchInputs.forEach((e)=>{
    e.style.display="none"
   })

})
