console.log('Practice 01 - Chapter 01');

const TAX_RATE = 0.03;
const PHONE_PRICE = 110.50;
const ACCESSORY_PRICE = 12.40;
const SPENDING_THRESHOLD = 300;

let bankAccountBalance = prompt('Type your bank account balance:');
let purchasePrice = 0;

while (purchasePrice < bankAccountBalance) {
    purchasePrice = purchasePrice + PHONE_PRICE;

    if (purchasePrice < SPENDING_THRESHOLD) {
        purchasePrice = purchasePrice + ACCESSORY_PRICE;
    }
}

function calculateTaxes(amount) {
    amount = amount + amount*TAX_RATE;

    return amount;
}

function formatFinalAmount(amount) {
    formattedAmount = '$' + amount.toFixed(2);

    console.log(formattedAmount);
}

formatFinalAmount(calculateTaxes(purchasePrice));

if (purchasePrice <= bankAccountBalance) {
    console.log('You can afford this purchase.');
} else {
    console.log('You can not afford this purchase.');
}