document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convert-base');
    const andBtn = document.getElementById('and-operation');
    const orBtn = document.getElementById('or-operation');
    const xorBtn = document.getElementById('xor-operation');
    const notBtn = document.getElementById('not-operation')

    convertBtn.addEventListener('click', function() {
        const inputStr = document.getElementById('input-number').value.trim();
        const fromBase = parseInt(document.getElementById('from-base').value);
        const toBases = Array.from(document.querySelectorAll('input[name="to-base"]:checked'))
                            .map(cb => parseInt(cb.value))

        if (!inputStr) {
            alert('Please enter a number to convert');
            return;
        }

        if (toBases.length === 0) {
            alert('Please select at least one base to convert to');
            return;
        }

        // Validate input based on fromBase
        if (!isValidInput(inputStr, fromBase)) {
            alert(`Invalid input for base ${fromBase}`);
            return;
        }

        // Convert to decimal first
        const decimalValue = convertToDecimal(inputStr, fromBase)

        // Convert to all selected bases
        toBases.forEach(base => {
            const result = convertFromDecimal(decimalValue, base);
            document.getElementById(getBaseName(base) + '-result').querySelector('.result-value').textContent = result;
            document.getElementById(getBaseName(base) + '-result').style.display = 'block';
        })

        // Hide results for bases not selected
        [2, 8, 10, 16].forEach(base => {
            if (!toBases.includes(base)) {
                document.getElementById(getBaseName(base) + '-result').style.display = 'none';
            }
        });
    })

    // Bitwise operations
    [andBtn, orBtn, xorBtn, notBtn].forEach(btn => {
        btn.addEventListener('click', function() {
            const inputStr = document.getElementById('input-number').value.trim();
            const fromBase = parseInt(document.getElementById('from-base').value);
            const secondInput = document.getElementById('second-number').value.trim();
            const operation = this.id.split('-')[0]

            if (!inputStr) {
                alert('Please enter a number');
                return;
            }

            if (operation !== 'not' && !secondInput) {
                alert('Please enter a second number for this operation');
                return;
            }

            // Validate inputs
            if (!isValidInput(inputStr, fromBase) || 
                (operation !== 'not' && !isValidInput(secondInput, fromBase))) {
                alert('Invalid input for the selected base');
                return;
            }

            // Convert to decimal
            const decimal1 = convertToDecimal(inputStr, fromBase);
            const decimal2 = operation !== 'not' ? convertToDecimal(secondInput, fromBase) : 0

            // Perform operation
            let result;
            switch(operation) {
                case 'and':
                    result = decimal1 & decimal2;
                    break;
                case 'or':
                    result = decimal1 | decimal2;
                    break;
                case 'xor':
                    result = decimal1 ^ decimal2;
                    break;
                case 'not':
                    result = ~decimal1;
                    break;
            }

            // Display result
            const resultElement = document.getElementById('bitwise-result').querySelector('.result-value');
            resultElement.textContent = `${result} (decimal) | ${convertFromDecimal(result, 2)} (binary)`;
            document.getElementById('bitwise-result').style.display = 'block';
        });
    })

function isValidInput(str, base) {
        const validChars = {
            2: /^[01]+$/,
            8: /^[0-7]+$/,
            10: /^-?\d+$/,
            16: /^[0-9A-Fa-f]+$/
        }

        return validChars[base].test(str);
    }

function convertToDecimal(str, fromBase) {
        if (fromBase === 10) return parseInt(str, 10)

        // For bases other than 10, we need to handle them carefully
        let decimal = 0;
        const digits = str.toUpperCase().split('')

        for (let i = 0; i < digits.length; i++) {
            const digit = digits[i];
            const digitValue = getDigitValue(digit);
            const position = digits.length - 1 - i;
            decimal += digitValue * Math.pow(fromBase, position);
        }

        return decimal;
    }

function convertFromDecimal(number, toBase) {
        if (toBase === 10) return number.toString()

        if (number === 0) return '0'

        let result = '';
        let n = Math.abs(number)

        while (n > 0) {
            const remainder = n % toBase;
            result = getDigitChar(remainder) + result;
            n = Math.floor(n / toBase);
        }

        if (number < 0) {
            result = '-' + result;
        }

        return result;
    }

function getDigitValue(char) {
        if (char >= '0' && char <= '9') return parseInt(char, 10);
        if (char >= 'A' && char <= 'F') return char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        return 0;
    }

function getDigitChar(value) {
        if (value < 10) return value.toString();
        return String.fromCharCode('A'.charCodeAt(0) + value - 10);
    }

function getBaseName(base) {
        switch(base) {
            case 2: return 'binary';
            case 8: return 'octal';
            case 10: return 'decimal';
            case 16: return 'hexadecimal';
            default: return '';
        }
    }
});
