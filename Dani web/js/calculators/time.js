document.addEventListener('DOMContentLoaded', function() {


// Time Difference Calculator


const calculateDifferenceBtn = document.getElementById('calculate-difference');


if (calculateDifferenceBtn) {


    calculateDifferenceBtn.addEventListener('click', calculateTimeDifference);


}
// Time Addition Calculator


const calculateAdditionBtn = document.getElementById('calculate-addition');


if (calculateAdditionBtn) {


    calculateAdditionBtn.addEventListener('click', calculateTimeAddition);


}





function calculateTimeDifference() {


    const startTime = document.getElementById('start-time').value;


    const endTime = document.getElementById('end-time').value


        if (!startTime || !endTime) {


        alert('Please enter both start and end times.');


        return;


    }




    const start = parseTime(startTime);


    const end = parseTime(endTime)


        let diffInMinutes = (end.hours * 60 + end.minutes) - (start.hours * 60 + start.minutes)


        // Handle case where end time is on the next day


    if (diffInMinutes < 0) {


        diffInMinutes += 24 * 60; // Add 24 hours


    }




    const hours = Math.floor(diffInMinutes / 60);


    const minutes = diffInMinutes % 60


        document.getElementById('time-difference').textContent = `${hours} hours ${minutes} minutes`;


}





function calculateTimeAddition() {


    const baseTime = document.getElementById('base-time').value;


    const hoursToAdd = parseInt(document.getElementById('hours-to-add').value) || 0;


    const minutesToAdd = parseInt(document.getElementById('minutes-to-add').value) || 0


        if (!baseTime) {


        alert('Please enter a base time.');


        return;


    }




    const base = parseTime(baseTime)


        let totalMinutes = base.hours * 60 + base.minutes + hoursToAdd * 60 + minutesToAdd


        // Handle overflow to next day


    totalMinutes = totalMinutes % (24 * 60);


    if (totalMinutes < 0) {


        totalMinutes += 24 * 60;


    }




    const hours = Math.floor(totalMinutes / 60);


    const minutes = totalMinutes % 60


        // Format the result


    const formattedHours = hours.toString().padStart(2, '0');


    const formattedMinutes = minutes.toString().padStart(2, '0')


        document.getElementById('total-time').textContent = `${formattedHours}:${formattedMinutes}`;


}





function parseTime(timeString) {


    const [hours, minutes] = timeString.split(':').map(Number);


    return { hours, minutes };


}






})


