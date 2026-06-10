document.getElementById('calculate-compound').addEventListener('click', function() {

const principal = parseFloat(document.getElementById('principal').value);

const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;

const years = parseFloat(document.getElementById('years').value);

const compoundFrequency = parseInt(document.getElementById('compound-frequency').value)


    const futureValue = principal * 

    Math.pow(1 + (interestRate / compoundFrequency), compoundFrequency * years)


    const totalInterest = futureValue - principal


    document.getElementById('future-value').textContent = '$' + futureValue.toFixed(2);

document.getElementById('total-interest').textContent = '$' + totalInterest.toFixed(2);

document.getElementById('result-container').classList.add('active');





});



