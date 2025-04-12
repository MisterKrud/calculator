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

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const allClear = document.getElementById("AC");
