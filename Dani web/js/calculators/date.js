document.addEventListener('DOMContentLoaded', function() {
const calcType = document.getElementById('calculation-type');
const dynamicInputs = document.getElementById('dynamic-inputs');
const calculateBtn = document.getElementById('calculate-date');
const resultContainer = document.getElementById('result-container');
const resultLabel = document.getElementById('result-label');
const dateResult = document.getElementById('date-result')

    // Update inputs when calculation type changes
calcType.addEventListener('change', updateInputs);
calculateBtn.addEventListener('click', calculateDate)


function updateInputs() {
    dynamicInputs.innerHTML = ''

        switch(calcType.value) {
        case 'difference':
            dynamicInputs.innerHTML = `
                <div class="input-group" id="start-date-group">
                    <label for="start-date">Start Date</label>
                    <input type="date" id="start-date">
                </div>
                <div class="input-group" id="end-date-group">
                    <label for="end-date">End Date</label>
                    <input type="date" id="end-date">
                </div>
            `;
            resultLabel.textContent = 'Days Between Dates:';
            break

            case 'add-days':
            dynamicInputs.innerHTML = `
                <div class="input-group" id="start-date-group">
                    <label for="start-date">Start Date</label>
                    <input type="date" id="start-date">
                </div>
                <div class="input-group" id="days-to-add-group">
                    <label for="days-to-add">Days to Add</label>
                    <input type="number" id="days-to-add" placeholder="Enter days" min="1">
                </div>
            `;
            resultLabel.textContent = 'Resulting Date:';
            break

            case 'subtract-days':
            dynamicInputs.innerHTML = `
                <div class="input-group" id="start-date-group">
                    <label for="start-date">Start Date</label>
                    <input type="date" id="start-date">
                </div>
                <div class="input-group" id="days-to-subtract-group">
                    <label for="days-to-subtract">Days to Subtract</label>
                    <input type="number" id="days-to-subtract" placeholder="Enter days" min="1">
                </div>
            `;
            resultLabel.textContent = 'Resulting Date:';
            break;
    }
}



function calculateDate() {
    try {
        let result

            switch(calcType.value) {
            case 'difference':
                const startDate = new Date(document.getElementById('start-date').value);
                const endDate = new Date(document.getElementById('end-date').value)

                    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                    throw new Error('Please select valid dates');
                }


                if (startDate > endDate) {
                    throw new Error('Start date must be before end date');
                }


                const timeDiff = endDate - startDate;
                const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
                result = `${dayDiff} days`;
                break

                case 'add-days':
                const addStartDate = new Date(document.getElementById('start-date').value);
                const daysToAdd = parseInt(document.getElementById('days-to-add').value)

                    if (isNaN(addStartDate.getTime())) {
                    throw new Error('Please select a valid start date');
                }
                if (isNaN(daysToAdd) || daysToAdd <= 0) {
                    throw new Error('Please enter a valid number of days to add');
                }


                const addResultDate = new Date(addStartDate);
                addResultDate.setDate(addResultDate.getDate() + daysToAdd);
                result = formatDate(addResultDate);
                break

                case 'subtract-days':
                const subStartDate = new Date(document.getElementById('start-date').value);
                const daysToSubtract = parseInt(document.getElementById('days-to-subtract').value)

                    if (isNaN(subStartDate.getTime())) {
                    throw new Error('Please select a valid start date');
                }
                if (isNaN(daysToSubtract) || daysToSubtract <= 0) {
                    throw new Error('Please enter a valid number of days to subtract');
                }


                const subResultDate = new Date(subStartDate);
                subResultDate.setDate(subResultDate.getDate() - daysToSubtract);
                result = formatDate(subResultDate);
                break;
        }


        dateResult.textContent = result;
        resultContainer.classList.add('active');
    } catch (error) {
        alert(error.message);
    }
}







function formatDate(date) {
    // Format date as YYYY-MM-DD (matches input[type="date"] format)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


// Set default dates (today and tomorrow)






function setDefaultDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1)

        document.getElementById('start-date').value = formatDate(today);
    if (calcType.value === 'difference') {
        document.getElementById('end-date').value = formatDate(tomorrow);
    } else {
        document.getElementById('days-to-add').value = '1';
        document.getElementById('days-to-subtract').value = '1';
    }
}


// Initialize the calculator
updateInputs();
setDefaultDates();




});


