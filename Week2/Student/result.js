function calculate(operation) {

    let a = Number(document.getElementById("num1").value);

    let b = Number(document.getElementById("num2").value);

    let result;

    if (operation == "add") {
        result = a + b;
    }

    else if (operation == "sub") {
        result = a - b;
    }

    else if (operation == "mul") {
        result = a * b;
    }

    else if (operation == "div") {
        result = a / b;
    }

    document.getElementById("result").innerHTML =
        "Result: " + result;
}
