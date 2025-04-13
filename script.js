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
  return num1 / num2;
}

//CALCULATOR VARIABLES
let number1;
let number2;
let operator;

let answersArray=[]

let num1Array = [];
let num2Array =[];
let operatorArray=[]



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
const displayScreen = document.getElementById("screen");
const para = document.getElementById("content");
const calculatedText = document.getElementById("calculated-text");

//const numberButtonArray =[one, two, three, four, five, six, seven, eight, nine, zero]
//const operatorButtonArray=[plus, minus, division, multiplication];
const numberButtons = document.querySelectorAll(".digit");


//NUMBER BUTTONS OBJECT ARRAY
const calculatorButtons = [
  { element: one, output: 1, class: "number" },
  { element: two, output: 2, class: "number" },
  { element: three, output: 3, class: "number" },
  { element: four, output: 4, class: "number" },
  { element: five, output: 5, class: "number" },
  { element: six, output: 6, class: "number" },
  { element: seven, output: 7, class: "number" },
  { element: eight, output: 8, class: "number" },
  { element: nine, output: 9, class: "number" },
  { element: zero, output: 0, class: "number" },
  { element: decimal, output: ".", class: "number" },
  { element: plus, output: "+", class: "operator", function: add() },
  { element: minus, output: "-", class: "operator", function: subtract() },
  { element: division, output: "/", class: "operator", function: divide() },
  { element: multiplication, output: "x", class: "operator", function: multiply() },
  { element: equals, output: "=", class: "function", function: operate() },
  { element: allClear, output: "", class: "function" },
];


//ON CLICK LISTENER
const buttonClick = calculatorButtons.forEach((calcButton) => {
    
  calcButton.element.addEventListener("click", () => {

   para.setAttribute("style", "color: blue");
    if (answersArray[0]){
       
        calculatedText.textContent='';
        answersArray=[];
    }
    if (calcButton.element === allClear) {
      num1Array = [];
      num2Array = [];
      operatorArray = [];
      para.textContent = "";
      calculatedText.textContent = "";
      para.setAttribute("style", "color: blue");
      answered = false
    }
    if (calcButton.class === "number") {
      para.textContent += calcButton.output;
      if (!num1Array[0]) {
        num1Array.push(calcButton.output);
      } else {
        num2Array.push(calcButton.output);
      }
    } else if (calcButton.class === "operator") {
        if(!num1Array[0]) {

        } else
      if (!num2Array[0]) {
        operatorArray.push(calcButton.output);
        para.textContent += calcButton.output;
      } else if (num2Array[0]) {
        //calculate answer so far
        //put the answer in content
        //continue to dsiaply (without clearing in the upper text)
        //make the asnwer numArray1
        //clear numArray2
        //clear operationArray

        calculatedText.textContent = para.textContent;
        calculatedText.textContent += calcButton.output;
        
        arraysToNumbers();
        para.textContent += calcButton.output;

        num1Array = [parseFloat(para.textContent)];
        num2Array = [];
        operatorArray =[calcButton.output];
        answersArray=[];
      }
    }
     else if (calcButton.element === equals) {
        if(!num1Array[0]){
            return 0
        } else if (!num2Array[0]){
            return parseFloat(num1Array.join(''))
        }
        
         
        para.setAttribute("style", "color: red;");
        calculatedText.textContent = para.textContent;
        calculatedText.textContent += calcButton.output;
        para.textContent = calcButton.output;

        arraysToNumbers();
        num1Array = [parseFloat(para.textContent)];
        num2Array = [];
        operatorArray = [];
        
      }
    
  });
});

function arraysToNumbers() {
    const num1 = parseFloat(num1Array.join(''))
                          
    const num2 =  parseFloat(num2Array.join(''));
    const operator = operatorArray.join('');
     operate(num1, num2, operator);
     para.textContent = operate(num1, num2, operator).toFixed(determineDecimalPlaces());
     answersArray.push(para.textContent)
}

function determineDecimalPlaces() {
    let index1 = num1Array.indexOf('.');
    let index2 = num2Array.indexOf('.');
if (index1 === -1 && index2 === -1){
    return 0
} else {
    let n1 = num1Array.length - (index1+1);
    let n2 = num2Array.length - (index2+2);

    if (n1>n2){
        return n1
    } return n2

}
}

// const equalsClicked = equals.addEventListener("click", () => {
//   const mathArray = numArray.join('')
//                             .split('+')
//                             console.log(mathArray)
//  return mathArray
// });

function operate(num1, num2, operator) {
    
    if (operator === '+') {
       return add(num1, num2)
        
    } else if (operator === '-') {
       return subtract(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2) 
    } else if (operator === 'x') {
        return multiply(num1, num2);
    }
    
  }

//    function calculateButtons() {
//     calculateButtons.forEach((calcButton)=> {
//         calcButton.element.addEventListener("click", () =>{
//             if (calcButton.class === 'number'&& ){

//             }
//         })
//     })
//    }

// const operatorSign = calculatorOperators.forEach((calcOperator) => {
//     calcOperator.element.addEventListener("click", () => para.textContent += calcOperator.output)
//     operationsArray.push(num)
// })



/*
//EVENT LISTENERS FOR BUTTON CLICKS
one.addEventListener("click", ()=> {
      para.textContent += "1";
}
);

two.addEventListener("click", ()=> {
        para.textContent += "2";
 }
 );

 three.addEventListener("click", ()=> {
    para.textContent += "3";
 }
 );
 four.addEventListener("click", ()=> {
    para.textContent += "4";
}
);

five.addEventListener("click", ()=> {
      para.textContent += "5";
}
);

six.addEventListener("click", ()=> {
  para.textContent += "6";
}
);
seven.addEventListener("click", ()=> {
    para.textContent += "7";
}
);

eight.addEventListener("click", ()=> {
      para.textContent += "8";
}
);

nine.addEventListener("click", ()=> {
  para.textContent += "9";
}
);
zero.addEventListener("click", ()=> {
  para.textContent += "0";
}
);

decimal.addEventListener("click", ()=> {
    para.textContent += ".";
  }
  );

plus.addEventListener("click", ()=> {
    para.textContent += "+";
}
);

minus.addEventListener("click", ()=> {
para.textContent += "-";
}
);
multiplication.addEventListener("click", ()=> {
    para.textContent += "X";
}
);

division.addEventListener("click", ()=> {
para.textContent += "/";
}
);

allClear.addEventListener("click", ()=> {
    para.textContent = "";
    }
    );

*/
