document.addEventListener('DOMContentLoaded', function() {
    const calcType = document.getElementById('calculation-type');
    const dynamicInputs = document.getElementById('dynamic-inputs');
    const resultUnit = document.getElementById('result-unit');
    const calculateBtn = document.getElementById('calculate-speed');
    const resultContainer = document.getElementById('result-container');
    const resultLabel = document.getElementById('result-label');
    const speedResult = document.getElementById('speed-result')

    calcType.addEventListener('change', updateInputs);
    calculateBtn.addEventListener('click', calculateSpeed)

function updateInputs() {
        dynamicInputs.innerHTML = ''

        switch(calcType.value) {
            case 'speed':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="distance-group">
                        <label for="distance">Distance</label>
                        <input type="number" id="distance" placeholder="Enter distance">
                        <select id="distance-unit">
                            <option value="km">Kilometers (km)</option>
                            <option value="miles">Miles (mi)</option>
                            <option value="meters">Meters (m)</option>
                            <option value="feet">Feet (ft)</option>
                        </select>
                    </div>
                    <div class="input-group" id="time-group">
                        <label for="time">Time</label>
                        <input type="number" id="time" placeholder="Enter time">
                        <select id="time-unit">
                            <option value="hours">Hours</option>
                            <option value="minutes">Minutes</option>
                            <option value="seconds">Seconds</option>
                        </select>
                    </div>
                `;
                resultLabel.textContent = 'Speed:';
                break

            case 'distance':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="speed-group">
                        <label for="speed">Speed</label>
                        <input type="number" id="speed" placeholder="Enter speed">
                        <select id="speed-unit">
                            <option value="kph">km/h</option>
                            <option value="mph">mph</option>
                            <option value="mps">m/s</option>
                            <option value="fps">ft/s</option>
                        </select>
                    </div>
                    <div class="input-group" id="time-group">
                        <label for="time">Time</label>
                        <input type="number" id="time" placeholder="Enter time">
                        <select id="time-unit">
                            <option value="hours">Hours</option>
                            <option value="minutes">Minutes</option>
                            <option value="seconds">Seconds</option>
                        </select>
                    </div>
                `;
                resultLabel.textContent = 'Distance:';
                break

            case 'time':
                dynamicInputs.innerHTML = `
                    <div class="input-group" id="distance-group">
                        <label for="distance">Distance</label>
                        <input type="number" id="distance" placeholder="Enter distance">
                        <select id="distance-unit">
                            <option value="km">Kilometers (km)</option>
                            <option value="miles">Miles (mi)</option>
                            <option value="meters">Meters (m)</option>
                            <option value="feet">Feet (ft)</option>
                        </select>
                    </div>
                    <div class="input-group" id="speed-group">
                        <label for="speed">Speed</label>
                        <input type="number" id="speed" placeholder="Enter speed">
                        <select id="speed-unit">
                            <option value="kph">km/h</option>
                            <option value="mph">mph</option>
                            <option value="mps">m/s</option>
                            <option value="fps">ft/s</option>
                        </select>
                    </div>
                `;
                resultLabel.textContent = 'Time:';
                break;
        }
    }

function calculateSpeed() {
        let result

        switch(calcType.value) {
            case 'speed':
                const distance = parseFloat(document.getElementById('distance').value);
                const distanceUnit = document.getElementById('distance-unit').value;
                const time = parseFloat(document.getElementById('time').value);
                const timeUnit = document.getElementById('time-unit').value

                if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
                    alert('Please enter valid distance and time');
                    return;
                }

                // Convert distance to km
                let distanceInKm;
                switch(distanceUnit) {
                    case 'km': distanceInKm = distance; break;
                    case 'miles': distanceInKm = distance * 1.60934; break;
                    case 'meters': distanceInKm = distance / 1000; break;
                    case 'feet': distanceInKm = distance * 0.0003048; break;
                }
                var speedInKph;
                // Convert time to hours
                let timeInHours;
                switch(timeUnit) {
                    case 'hours': timeInHours = time; break;
                    case 'minutes': timeInHours = time / 60; break;
                    case 'seconds': timeInHours = time / 3600; break;
                }

                var speedInKph = distanceInKm / timeInHours;
                result = convertSpeed(speedInKph, 'kph', resultUnit.value);
                break

            case 'distance':
                const speed = parseFloat(document.getElementById('speed').value);
                const speedUnit = document.getElementById('speed-unit').value;
                const time2 = parseFloat(document.getElementById('time').value);
                const timeUnit2 = document.getElementById('time-unit').value

                if (isNaN(speed) || isNaN(time2) || speed <= 0 || time2 <= 0) {
                    alert('Please enter valid speed and time');
                    return;
                }

                // Convert speed to km/h
                let speedInKph;
                switch(speedUnit) {
                    case 'kph': speedInKph = speed; break;
                    case 'mph': speedInKph = speed * 1.60934; break;
                    case 'mps': speedInKph = speed * 3.6; break;
                    case 'fps': speedInKph = speed * 1.09728; break;
                }

                // Convert time to hours
                let timeInHours2;
                switch(timeUnit2) {
                    case 'hours': timeInHours2 = time2; break;
                    case 'minutes': timeInHours2 = time2 / 60; break;
                    case 'seconds': timeInHours2 = time2 / 3600; break;
                }

                const distanceInKm2 = speedInKph * timeInHours2;
                result = convertDistance(distanceInKm2, 'km', resultUnit.value);
                break

            case 'time':
                const distance2 = parseFloat(document.getElementById('distance').value);
                const distanceUnit2 = document.getElementById('distance-unit').value;
                const speed2 = parseFloat(document.getElementById('speed').value);
                const speedUnit2 = document.getElementById('speed-unit').value

                if (isNaN(distance2) || isNaN(speed2) || distance2 <= 0 || speed2 <= 0) {
                    alert('Please enter valid distance and speed');
                    return;
                }

                // Convert distance to km
                let distanceInKm3;
                switch(distanceUnit2) {
                    case 'km': distanceInKm3 = distance2; break;
                    case 'miles': distanceInKm3 = distance2 * 1.60934; break;
                    case 'meters': distanceInKm3 = distance2 / 1000; break;
                    case 'feet': distanceInKm3 = distance2 * 0.0003048; break;
                }

                // Convert speed to km/h
                let speedInKph2;
                switch(speedUnit2) {
                    case 'kph': speedInKph2 = speed2; break;
                    case 'mph': speedInKph2 = speed2 * 1.60934; break;
                    case 'mps': speedInKph2 = speed2 * 3.6; break;
                    case 'fps': speedInKph2 = speed2 * 1.09728; break;
                }

                const timeInHours3 = distanceInKm3 / speedInKph2;
                result = timeInHours3.toFixed(2) + ' hours';
                break;
        }

        speedResult.textContent = result;
        resultContainer.classList.add('active');
    }

function convertSpeed(value, fromUnit, toUnit) {
        // First convert to km/h
        let kph;
        switch(fromUnit) {
            case 'kph': kph = value; break;
            case 'mph': kph = value * 1.60934; break;
            case 'mps': kph = value * 3.6; break;
            case 'fps': kph = value * 1.09728; break;
        }

        // Then convert to target unit
        switch(toUnit) {
            case 'kph': return kph.toFixed(2) + ' km/h';
            case 'mph': return (kph / 1.60934).toFixed(2) + ' mph';
            case 'mps': return (kph / 3.6).toFixed(2) + ' m/s';
            case 'fps': return (kph / 1.09728).toFixed(2) + ' ft/s';
        }
    }

function convertDistance(value, fromUnit, toUnit) {
        // First convert to km
        let km;
        switch(fromUnit) {
            case 'km': km = value; break;
            case 'miles': km = value * 1.60934; break;
            case 'meters': km = value / 1000; break;
            case 'feet': km = value * 0.0003048; break;
        }

        // Then convert to target unit
        switch(toUnit) {
            case 'km': return km.toFixed(2) + ' km';
            case 'miles': return (km / 1.60934).toFixed(2) + ' miles';
            case 'meters': return (km * 1000).toFixed(2) + ' m';
            case 'feet': return (km / 0.0003048).toFixed(2) + ' ft';
        }
    }

    // Initialize inputs
    updateInputs();
});
