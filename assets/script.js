// define variables and dom manipulation
document.getElementById('calculate-button').addEventListener('click', function(){
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('interest').value / 100);
    const mortgageType = document.querySelector('input[name="type"]:checked').value;

    if(isNaN(amount) || isNaN(term) || isNaN(rate)){
        alert('Please fill out all fields.');
        return;
    }

    //mortgage calculation logic
    let monthlyRepayment, totalRepayment;
    if(mortgageType === 'repayment'){
        const monthlyRate = rate / 12;
        const numberOfPayments = term * 12;
        const repayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        monthlyRepayment = repayment.toFixed(2);
        totalRepayment = (repayment * numberOfPayments).toFixed(2);
    }else{
        const interestOnlyRepayment = amount * (rate / 12);
        monthlyRepayment = interestOnlyRepayment.toFixed(2);
        totalRepayment = (interestOnlyRepayment * term * 12).toFixed(2);
    }

    // show results and hide idle page
    document.getElementById('result-idle').style.display = 'none';
    document.getElementById('result-show').style.display = 'block';
    document.getElementById('monthly-repayment').textContent = `£${monthlyRepayment}`;
    document.getElementById('total-repayment').textContent = `£${totalRepayment}`;
});
