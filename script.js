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

let operationsArray=[]

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
const displayScreen = document.getElementById("screen")
const para = document.getElementById("content");

//const numberButtonArray =[one, two, three, four, five, six, seven, eight, nine, zero]
//const operatorButtonArray=[plus, minus, division, multiplication];
const numberButtons = document.querySelectorAll(".digit")

//NUMBER BUTTONS OBJECT ARRAY
const calculatorButtons = [
    {element: one, output: 1, class: 'number'},
    {element: two, output: 2, class: 'number'},
    {element: three, output: 3, class: 'number'},
    {element: four, output: 4, class: 'number'},
    {element: five, output: 5, class: 'number'},
    {element: six, output: 6, class: 'number'},
    {element: seven, output: 7, class: 'number'},
    {element: eight, output: 8, class: 'number'},
    {element: nine, output: 9, class: 'number'},
    {element: zero, output: 0, class: 'number'},
    {element: decimal, output: '.', class: 'operator'},
    {element: plus, output: '+', class: 'operator', function: add()},
    {element: minus, output: '-', class: 'operator', function: subtract()},
    {element: division, output: '/', class: 'operator', function: divide()},
    {element: multiplication, output: 'x', class: 'operator', function: multiply()},
]


 
    function whenButtonClicked(){
    const buttonClick = calculatorNumbers.forEach((calcButton) => {
    calcButton.element.addEventListener("click", ()=> para.textContent += calcButton.output)
        return para.textContent
   
    }
    )}
   

whenButtonClicked();
    // const operatorSign = calculatorOperators.forEach((calcOperator) => {
    //     calcOperator.element.addEventListener("click", () => para.textContent += calcOperator.output)
    //     operationsArray.push(num)
    // })

console.log(operationsArray)

    

  
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

