document.getElementById('calculate-budget').addEventListener('click', function() {

 const monthlyIncome = parseFloat(document.getElementById('monthly-income').value);

 const housing = parseFloat(document.getElementById('housing').value) || 0;



 const utilities = parseFloat(document.getElementById('utilities').value) || 0;



 const groceries = parseFloat(document.getElementById('groceries').value) || 0;

 const transportation = parseFloat(document.getElementById('transportation').value) || 0;

 const entertainment = parseFloat(document.getElementById('entertainment').value) || 0;

 const savings = parseFloat(document.getElementById('savings').value) || 0;

 const other = parseFloat(document.getElementById('other').value) || 0

    const totalExpenses = housing + utilities + groceries + transportation + entertainment + savings + other;

 const remainingBalance = monthlyIncome - totalExpenses

    document.getElementById('total-expenses').textContent = '$' + totalExpenses.toFixed(2);

 document.getElementById('remaining-balance').textContent = '$' + remainingBalance.toFixed(2);

 document.getElementById('result-container').classList.add('active');




});


