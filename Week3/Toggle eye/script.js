let balance = 10000;
let pin = 1234;

let showBalance = true;

function updateBalance() {

    if (showBalance) {
        $("#balance").text("Bank Balance: Rs. " + balance);
    }

    else {
        $("#balance").text("Bank Balance: ******");
    }
}

function withdraw() {

    let amount = Number($("#amount").val());

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

    let amount = Number($("#amount").val());

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

/* Eye Icon Click */

$("#eyeIcon").click(function () {

    showBalance = !showBalance;

    updateBalance();

    // Change Eye Icon

    if (showBalance) {

        $("#eyeIcon")
            .removeClass("fa-eye-slash")
            .addClass("fa-eye");
    }

    else {

        $("#eyeIcon")
            .removeClass("fa-eye")
            .addClass("fa-eye-slash");
    }

});

/* First Load */

updateBalance();
