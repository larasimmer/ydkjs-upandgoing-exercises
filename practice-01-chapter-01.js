console.log('Practice 01 - Chapter 01');

const TAX_RATE = 0.03;
const PHONE_PRICE = 500;
const ACCESSORY_PRICE = 15;
const SPENDING_THRESHOLD = 5000;

let bankAccountBalance = prompt('Informe o saldo da sua conta bancária:');
let purchase = 0;
let purchasePrice = 0;

while (purchasePrice <= bankAccountBalance) {
    purchase = purchase + 1;
    purchasePrice = purchasePrice + PHONE_PRICE;
    //bankAccountBalance = bankAccountBalance - purchasePrice;
}

if (purchasePrice + purchase*ACCESSORY_PRICE < SPENDING_THRESHOLD) {
    purchasePrice = purchasePrice + purchase*ACCESSORY_PRICE;
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
    console.log('Tenho dinheiro suficiente para comprar.');
} else {
    console.log('Não tenho dinheiro suficiente para comprar.');
}