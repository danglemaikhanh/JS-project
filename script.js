// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the reels
// 5. Check if there is a win
// 6. Collect winnings or deduct losses
// 7. Play again
/* ------------------------------------- */


// Despot some money:
const prompt = require('prompt-sync')();

const deposit = () => {
    while (true) {
        const depositAmount = prompt('Enter a deposit amount: ');
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('Invalid deposit amount, try again');
        } else {
            return numberDepositAmount;
        }
    }
}

// Determine number of lines to bet on: 
const getNumberOfLines = () => {
    while (true) {
        const betLines = prompt('Enter a number of lines to bet on: ');
        const numberOfLines = parseFloat(betLines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log('Invalid number of lines, try again');
        } else {
            return numberOfLines;
        }
    }
}

// Collect a bet amount:
const getBet = (balance, lines) => {
    while (true) {
        const betAmount = prompt('Enter a bet per line: ');
        const betNumber = parseFloat(betAmount);

        if (isNaN(betNumber) || betNumber <= 0 || betNumber > balance / lines) {
            console.log('Invalid bet, try again');
        } else {
            return betNumber;
        }
    }
}

let balance = deposit();
const lines = getNumberOfLines();
const bet = getBet(balance, lines);