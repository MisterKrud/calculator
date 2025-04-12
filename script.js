//BASIC CALCULATOR FUNCTIONS
function add(num1, num2) {
    return (num1+num2);
}

function subtract(num1, num2) {
    return (num1-num2);
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2
}

//CALCULATOR VARIABLES
let number1
let number2
let operator

function operate(num1, num2, operator="add") {
    switch(operator) {
        case "add":
            add(num1,num2);
          break;
        case "subtrac":
            subtract(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
        case "multiply":
            multiply(num1, num2);
    };
};