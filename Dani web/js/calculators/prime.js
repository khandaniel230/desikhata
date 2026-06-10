document.addEventListener('DOMContentLoaded', function() {
const checkPrimeBtn = document.getElementById('check-prime');
const findPrimesBtn = document.getElementById('find-primes');
const resultContainer = document.getElementById('result-container');
const primesListContainer = document.getElementById('primes-list-container')

    checkPrimeBtn.addEventListener('click', function() {
    const num = parseInt(document.getElementById('number-input').value)

        if (isNaN(num) || num < 2) {
        alert('Please enter a valid number greater than 1');
        return;
    }


    const isPrime = checkIfPrime(num);
    const factors = primeFactors(num);
    const divisors = findDivisors(num)

        document.getElementById('prime-status').textContent = 
        isPrime ? `${num} is a prime number` : `${num} is not a prime number`

        document.getElementById('prime-factors').textContent = 
        factors.length > 0 ? factors.join(' ÃƒÆ’Ã¢â‚¬â€ ') : `${num} (prime)`

        document.getElementById('divisibility').textContent = 
        divisors.length > 0 ? `Divisible by: ${divisors.join(', ')}` : 'Only divisible by 1 and itself'

        resultContainer.style.display = 'block';
})

    findPrimesBtn.addEventListener('click', function() {
    const start = parseInt(document.getElementById('range-start').value);
    const end = parseInt(document.getElementById('range-end').value)

        if (isNaN(start) || isNaN(end) || start < 2 || end < start) {
        alert('Please enter a valid range (start >= 2, end >= start)');
        return;
    }


    if (end - start > 10000) {
        alert('Range too large. Please select a range of 10,000 numbers or less');
        return;
    }


    const primes = findPrimesInRange(start, end);
    document.getElementById('primes-list').textContent = 
        primes.length > 0 ? primes.join(', ') : 'No primes found in this range'

        primesListContainer.style.display = 'block';
})


function checkIfPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false

        for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}







function primeFactors(n) {
    const factors = [];
    let divisor = 2;
    let number = n

        while (number >= 2) {
        if (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}







function findDivisors(n) {
    const divisors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) divisors.push(n / i);
        }
    }
    return divisors.sort((a, b) => a - b);
}







function findPrimesInRange(start, end) {
    const primes = [];
    // Simple sieve for small ranges
    if (end <= 1000000) {
        for (let i = start; i <= end; i++) {
            if (checkIfPrime(i)) primes.push(i);
        }
    } else {
        // For larger ranges, use a more optimized approach
        const sieve = new Array(end + 1).fill(true);
        sieve[0] = sieve[1] = false

            for (let i = 2; i <= Math.sqrt(end); i++) {
            if (sieve[i]) {
                for (let j = i * i; j <= end; j += i) {
                    sieve[j] = false;
                }
            }
        }


        for (let i = start; i <= end; i++) {
            if (sieve[i]) primes.push(i);
        }
    }
    return primes;
}




});


