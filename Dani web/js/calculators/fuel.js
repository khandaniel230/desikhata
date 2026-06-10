document.addEventListener('DOMContentLoaded', function() {
const tripDistance = document.getElementById('trip-distance');
const distanceUnit = document.getElementById('distance-unit');
const fuelEfficiency = document.getElementById('fuel-efficiency');
const efficiencyUnit = document.getElementById('efficiency-unit');
const fuelPrice = document.getElementById('fuel-price');
const priceUnit = document.getElementById('price-unit');
const calculateBtn = document.getElementById('calculate-fuel');
const resultContainer = document.getElementById('result-container');
const fuelNeeded = document.getElementById('fuel-needed');
const totalCost = document.getElementById('total-cost')

    calculateBtn.addEventListener('click', calculateFuelCost)


function calculateFuelCost() {
    const distance = parseFloat(tripDistance.value);
    const efficiency = parseFloat(fuelEfficiency.value);
    const price = parseFloat(fuelPrice.value)

        if (isNaN(distance) || isNaN(efficiency) || isNaN(price) || distance <= 0 || efficiency <= 0 || price <= 0) {
        alert('Please enter valid values');
        return;
    }


    // Convert distance to km if in miles
    let distanceInKm = distance;
    if (distanceUnit.value === 'miles') {
        distanceInKm = distance * 1.60934;
    }


    // Calculate fuel needed in liters
    let fuelInLiters;
    if (efficiencyUnit.value === 'mpg') {
        // Convert mpg to L/100km
        const lPer100km = 235.2145 / efficiency;
        fuelInLiters = (distanceInKm * lPer100km) / 100;
    } else {
        // Already in L/100km
        fuelInLiters = (distanceInKm * efficiency) / 100;
    }


    // Calculate total cost
    let cost;
    if (priceUnit.value === 'gallon') {
        // Convert price per gallon to price per liter
        const pricePerLiter = price / 3.78541;
        cost = fuelInLiters * pricePerLiter;
    } else {
        // Already in price per liter
        cost = fuelInLiters * price;
    }


    // Display results
    if (efficiencyUnit.value === 'mpg') {
        fuelNeeded.textContent = (fuelInLiters * 0.264172).toFixed(2) + ' gallons';
    } else {
        fuelNeeded.textContent = fuelInLiters.toFixed(2) + ' liters';
    }


    totalCost.textContent = '$' + cost.toFixed(2);
    resultContainer.classList.add('active');
}




});


