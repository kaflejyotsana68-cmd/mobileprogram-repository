let balance = 10000;
let pin = 1234;

function updateBalance() {
    document.getElementById("balance").innerText =
        "Bank Balance: Rs. " + balance;
}

function withdraw() {

    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    if (amount % 100 !== 0) {
        alert("Amount must be multiple of 100");
        return;
    }

    let enteredPin = prompt("Enter PIN");

    if (Number(enteredPin) !== pin) {
        alert("Wrong PIN");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance");
        return;
    }

    balance = balance - amount;

    updateBalance();

    alert("Withdraw Successful");
}

function deposit() {

    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    if (amount % 100 !== 0) {
        alert("Amount must be multiple of 100");
        return;
    }

    let enteredPin = prompt("Enter PIN");

    if (Number(enteredPin) !== pin) {
        alert("Wrong PIN");
        return;
    }

    balance = balance + amount;

    updateBalance();

    alert("Deposit Successful");
}