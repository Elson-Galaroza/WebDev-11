// <!-- MIDTERM -->
// <!-- LAB 1: SIMPLE ADDITION IN JAVA SCRIPT -->
function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = num1 + num2;
    document.getElementById("result").textContent = `Sum: ${sum}`;
}

function subtractNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = num1 - num2;
    document.getElementById("result").textContent = `Difference: ${sum}`;
}

function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = num1 * num2;
    document.getElementById("result").textContent = `Product: ${sum}`;
}

function divideNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = num1 / num2;
    document.getElementById("result").textContent = `Qoutient: ${sum}`;
}

function modulus() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = num1 %  num2;
    document.getElementById("result").textContent = `Remainder: ${sum}`;
}

function exponential() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const sum = num1 **  num2;
    document.getElementById("result").textContent = `Exponential: ${sum}`;
}

// <!-- LAB 1: SIMPLE ADDITION IN JAVA SCRIPT -->

// <!-- LAB 2: Calculate Total Cost with Discount -->

// Problem1: Calculate Total Cost with Discount
// Description: Create a program that calculates the total cost of a customers 
// 5-item order based on different individual prices. If the total cost is greater than or equal to 
// Php 1000, apply a 10% discount. Display the final cost.



// <!-- LAB 2: Calculate Total Cost with Discount -->


