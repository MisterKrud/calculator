//BASIC CALCULATOR FUNCTIONS
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 != 0) {
    return num1 / num2;
  } else {
    para.textContent = "Nope!";
    calculatedText.textContent = "Dividing by Zero? That's whack!";
  }
}

//CALCULATOR VARIABLES
let number1;
let number2;
let operator;

let answersArray = [];

let num1Array = [];
let num2Array = [];
let operatorArray = [];

//get all button elements as variables
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const allClear = document.getElementById("AC");
const backspace = document.getElementById("backspace");
const displayScreen = document.getElementById("screen");
const para = document.getElementById("content");
const calculatedText = document.getElementById("calculated-text");
const posNeg = document.getElementById("positive-negative");

//const numberButtonArray =[one, two, three, four, five, six, seven, eight, nine, zero]
//const operatorButtonArray=[plus, minus, division, multiplication];
const numberButtons = document.querySelectorAll(".digit");

//NUMBER BUTTONS OBJECT ARRAY
const calculatorButtons = [
  { element: one, output: '1', class: "number" },
  { element: two, output: '2', class: "number" },
  { element: three, output: '3', class: "number" },
  { element: four, output: '4', class: "number" },
  { element: five, output: '5', class: "number" },
  { element: six, output: '6', class: "number" },
  { element: seven, output: '7', class: "number" },
  { element: eight, output: '8', class: "number" },
  { element: nine, output: '9', class: "number" },
  { element: zero, output: "0", class: "number" },
  { element: decimal, output: ".", class: "decimal" },
  { element: plus, output: "+", class: "operator", function: add() },
  { element: minus, output: "-", class: "operator", function: subtract() },
  { element: division, output: "/", class: "operator", function: divide() },
  {
    element: multiplication,
    output: "x",
    class: "operator",
    function: multiply(),
  },
  { element: equals, output: "=", class: "function", function: operate() },
  { element: allClear, output: "", class: "function" },
  { element: backspace, class: "function" },
  { element: posNeg, class: "function" },
];


//ON CLICK LISTENER
const buttonClick = calculatorButtons.forEach((calcButton) => {
  calcButton.element.addEventListener("click", () => {
    //reset text to blue
    para.setAttribute("style", "color: black");

    //If a calculation has just been completed, empty the screen
    if (answersArray[0]) {
      para.textContent = "";
      calculatedText.textContent = "";
      answersArray = [];
    }
    //All clear - reset everything
    if (calcButton.element === allClear) {
      num1Array = [];
      num2Array = [];
      operatorArray = [];
      para.textContent = "";
      calculatedText.textContent = "";
      para.setAttribute("style", "color: blue");
      answered = false;
    }

    //Number is clicked add it to the screen
    if (calcButton.class === "number") {
      //If this is the first number to calculate - add it to the first number digit array

      if (!operatorArray[0]) {
        para.textContent += calcButton.output;
        num1Array.push(calcButton.output);
      } else {
        //If a first number exists push didgits to second number array
        para.textContent += calcButton.output;
        num2Array.push(calcButton.output);
      }
    }

    //prevent two decimals in the same number
    if (calcButton.element === decimal) {
      console.log("dot hit");
      if (!operatorArray[0]) {
        if (num1Array.includes(".")) {
          console.log("Too many decimals");
        } else {
          console.log("first decimal of the number");
          para.textContent += calcButton.output;
          num1Array.push(calcButton.output);
        }
      } else if (operatorArray[0]) {
        if (num2Array.includes(".")) {
          console.log("Too many decimals");
        } else {
          console.log("first decimal of the number");
          para.textContent += calcButton.output;
          num2Array.push(calcButton.output);
        }
      }
    }
    // backspace is clicked remove one character
    else if (calcButton.element === backspace) {
      let screenText = para.textContent;
      let n = screenText.length;

      screenText = screenText.slice(0, n - 1);

      para.textContent = screenText;

      if (num2Array[0]) {
        num2Array.pop();
      } else if (operatorArray[0]) {
        operatorArray.pop();
      } else if (num1Array[0]) {
        num1Array.pop();
      }
    }
    //Swap between positive and negative number
    else if (calcButton.element === posNeg) {
      console.log("hit the +/- button");
      if (!operatorArray[0]) {
        if (num1Array[0] != "-") {
          num1Array.unshift("-");
          para.textContent = `- ${para.textContent}`;
        } else {
          num1Array.shift();
          para.textContent = para.textContent.slice(1);
        }
      } else if (operatorArray[0]) {
        if (num2Array[0] != "-") {
          num2Array.unshift("-");
          para.textContent = `${num1Array.join(
            ""
          )}${operatorArray}${num2Array.join("")}`;
        } else {
          num2Array.shift();
          para.textContent = para.textContent.slice(1);
        }
      }
    }

    //Operator is clicked
    else if (calcButton.class === "operator") {
      //If no numbers have been input or the operator is pressed twice in a row- do nothing
      if (!num1Array[0] || (!num2Array[0] && operatorArray[0])) {
      }
      //If the second number hasn't been clicked, display it and push it to the second number digit array
      else if (!num2Array[0]) {
        operatorArray.push(calcButton.output);
        para.textContent += calcButton.output;
        //If a second number has been typed
      } else if (num2Array[0]) {
        //display what has been typed
        calculatedText.textContent = para.textContent;
        calculatedText.textContent += calcButton.output;
        //calculate the answer and display
        arraysToNumbers();
        para.textContent += calcButton.output;
        //make the answer the first number, clear the second number and the operator
        num1Array = [parseFloat(para.textContent)];
        num2Array = [];
        operatorArray = [calcButton.output];
        answersArray = [];
      }
    }
    //If equals is pressed
    else if (calcButton.element === equals) {
      //If nothing has been typed yet, do nothing - return 0
      if (!num1Array[0]) {
        return 0;

        //If only one number has been input before pressing equals - return the number itself
      } else if (!num2Array[0]) {
        let previousNumber = parseFloat(num1Array.join(""));
        num1Array = [previousNumber];
        operatorArray = [];
        para.textContent = previousNumber;
      } else if (num2Array) {
        //Of all numbers have been typed and calculated - show the answer. Make it red
        para.setAttribute("style", "color: #ff1303;");
        calculatedText.textContent = para.textContent;
        calculatedText.textContent += calcButton.output;
        para.textContent = calcButton.output;

        arraysToNumbers();
        //clear out the numbers to start again
        clear();
      }
    }
  });
});

//KEYBOARD FUNCTIONALITY
document.addEventListener("keydown", (e)=>{
  e.preventDefault();
//  onkeydown = (e) => {
  //reset text to blue
  para.setAttribute("style", "color: black");



 if(e.key !=('1'|| '2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0'||'+'||'-'||'*'||'/'||'+'||'/'||'*'||'-')){e.preventDefault()}
 else

  //If a calculation has just been completed, empty the screen
  if (answersArray[0]) {
    para.textContent = "";
    calculatedText.textContent = "";
    answersArray = [];
  }
  //All clear - reset everything
  // if (e.key === 'ac'||'AC') {
  //   num1Array = [];
  //   num2Array = [];
  //   operatorArray = [];
  //   document.getElementById("content").textContent = "";
  //   document.getElementById("calculated-text").textContent = "";
  //   // para.setAttribute("style", "color: blue");
  //   answered = false;
  // }

  //Number is clicked add it to the screen
 
    if (!operatorArray[0]) {
      para.textContent += e.key;
      num1Array.push(e.key);
    } else {
      //If a first number exists push didgits to second number array
      para.textContent += e.key;
      num2Array.push(e.key);
    }
  

  //prevent two decimals in the same number
  if (e.key === '.') {
    console.log("dot hit");
    if (!operatorArray[0]) {
      if (num1Array.includes(".")) {
        console.log("Too many decimals");
      } else {
        console.log("first decimal of the number");
        para.textContent += e.key;
        num1Array.push(e.key);
      }
    } else if (operatorArray[0]) {
      if (num2Array.includes(".")) {
        console.log("Too many decimals");
      } else {
        console.log("first decimal of the number");
        para.textContent += e.key;
        num2Array.push(e.key);
      }
    }
  }
  // backspace is clicked remove one character
  else if (e.key === "Backspace") {
    e.preventDefault()
    let screenText = para.textContent;
    let n = screenText.length;

    screenText = screenText.slice(0, n - 1);

    para.textContent = screenText;

    if (num2Array[0]) {
      num2Array.pop();
    } else if (operatorArray[0]) {
      operatorArray.pop();
    } else if (num1Array[0]) {
      num1Array.pop();
    }
  }
  //Swap between positive and negative number
  else if (e.key === '_') {
    console.log("hit the +/- button");
    if (!operatorArray[0]) {
      if (num1Array[0] != "-") {
        num1Array.unshift("-");
        para.textContent = `- ${para.textContent}`;
      } else {
        num1Array.shift();
        para.textContent = para.textContent.slice(1);
      }
    } else if (operatorArray[0]) {
      if (num2Array[0] != "-") {
        num2Array.unshift("-");
        para.textContent = `${num1Array.join(
          ""
        )}${operatorArray}${num2Array.join("")}`;
      } else {
        num2Array.shift();
        para.textContent = para.textContent.slice(1);
      }
    }
  }

  //Operator is clicked
  else if (e.key === ('+'||'-'||'*'||'/'||'+'||'/'||'*'||'-')) {
    //If no numbers have been input or the operator is pressed twice in a row- do nothing
    if (!num1Array[0] || (!num2Array[0] && operatorArray[0])) {
    }
    //If the second number hasn't been clicked, display it and push it to the second number digit array
    else if (!num2Array[0]) {
      operatorArray.push(e.key);
      para.textContent += e.key;
      //If a second number has been typed
    } else if (num2Array[0]) {
      //display what has been typed
      calculatedText.textContent = para.textContent;
      calculatedText.textContent += e.key;
      //calculate the answer and display
      arraysToNumbers();
      para.textContent += e.key;
      //make the answer the first number, clear the second number and the operator
      num1Array = [parseFloat(para.textContent)];
      num2Array = [];
      operatorArray = [e.key];
      answersArray = [];
    }
  }
  //If equals is pressed
  else if (e.key === '='||'Enter') {
    e.preventDefault();
    //If nothing has been typed yet, do nothing - return 0
    if (!num1Array[0]) {
      return 0;

      //If only one number has been input before pressing equals - return the number itself
    } else if (!num2Array[0]) {
      let previousNumber = parseFloat(num1Array.join(""));
      num1Array = [previousNumber];
      operatorArray = [];
      para.textContent = previousNumber;
    } else if (num2Array[0]) {
      //Of all numbers have been typed and calculated - show the answer. Make it red
      para.setAttribute("style", "color: #ff1303;");
      calculatedText.textContent = para.textContent;
      calculatedText.textContent += '=';
      para.textContent = '=';

      arraysToNumbers();
      //clear out the numbers to start again
      clear();
    }
  } else {}

 })
 



// const buttonClick = calculatorButtons.forEach((calcButton) => {
//   calcButton.element.addEventListener("click", () => {

//FUNCTION TO TAKE ALL INPUTS AND TURN THEM INTO NUMBERS
function arraysToNumbers() {
  const num1 = parseFloat(num1Array.join(""));

  const num2 = parseFloat(num2Array.join(""));
  const operator = operatorArray.join("");
  operate(num1, num2, operator);
  if (num2 != 0) {
    para.textContent = operate(num1, num2, operator).toFixed(
      determineDecimalPlaces()
    );
  } else {
    clear();
  }
  answersArray.push(para.textContent);
}

//FUNCTION TO DETERMINE DECIMAL PLACES BASED ON INPUT NUMBER WITH THE MOST
function determineDecimalPlaces() {
  let index1 = num1Array.indexOf(".");
  let index2 = num2Array.indexOf(".");
  if (index1 === -1 && index2 === -1) {
    return 0;
  } else {
    let n1 = num1Array.length - (index1 + 1);
    let n2 = num2Array.length - (index2 + 1);

    if (n1 > n2) {
      return n1;
    }
    return n2;
  }
}

//Clear out arrays
function clear() {
  num1Array = [];
  num2Array = [];
  operatorArray = [];
}

//FUNCTION TO CHOOSE WHICH CALCULATION TO PERFORM
function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  }
}
