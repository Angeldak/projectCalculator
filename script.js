const calcBtnNumber = document.querySelectorAll(".calcBtnNumber");
const calcBtnOperator = document.querySelectorAll(".calcBtnOperator");
const calcDisplay = document.querySelector(".calcDisplay");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const allClearBtn = document.querySelector("#allClear");

let currentDisplay = parseInt(calcDisplay.innerText);
let runningTotal = 0;
let lastOperator;

//Need to figure out how to do a max length on the display that is not a set number
//Parantheses separate variables when opening and closing

//Initialize numbers and add event listeners
for (let i = 0; i < calcBtnNumber.length; i++) {
    calcBtnNumber[i].addEventListener("click", () => {
        if (currentDisplay === 0 || calcDisplay.innerText === 0) {
            if (calcDisplay.innerText.length < 10) {
                currentDisplay = parseInt(calcBtnNumber[i].innerText);
                calcDisplay.innerText = currentDisplay;
            }
        } else {
            if (calcDisplay.innerText.length < 10) {
                currentDisplay = currentDisplay + calcBtnNumber[i].innerText;
                calcDisplay.innerText = currentDisplay;
            }
        }
    })
}

function calculate(lastOp) {
    switch (lastOp) {
        case "+":
            runningTotal = runningTotal + parseInt(calcDisplay.innerText);
            break;
        case "-":
            runningTotal = runningTotal - parseInt(calcDisplay.innerText);
            break;
        case "x":
            runningTotal = runningTotal * parseInt(calcDisplay.innerText);
            break;
        case "/":
            runningTotal = runningTotal / parseInt(calcDisplay.innerText);
            break;
        default:
            return;
    }
}

//Initialize operators and add event listeners
for (let i = 0; i < calcBtnOperator.length; i++) {
    calcBtnOperator[i].addEventListener("click", () => {
        switch (calcBtnOperator[i].innerText) {
            case "+":
                if (lastOperator === "+") {
                    let currentValue = parseInt(calcDisplay.innerText);
                    runningTotal = runningTotal + currentValue;
                    currentDisplay = 0;
                    calcDisplay.innerText = runningTotal;
                    lastOperator = "+";
                } else {
                    calculate(lastOperator);
                    currentDisplay = 0;
                    calcDisplay.innerText = runningTotal;
                    lastOperator = "+";
                }
                break;
            case "-":
                if (lastOperator === "-") {
                    runningTotal = runningTotal - parseInt(calcDisplay.innerText);
                    currentDisplay = 0;
                    calcDisplay.innerText = runningTotal;
                } else {
                    calculate(lastOperator);
                    currentDisplay = 0;
                    calcDisplay.innerText = runningTotal;
                    lastOperator = "-";
                }
                break;
            case "/":
                console.log("Divide");
                break;
            case "x":
                console.log("Multiply");
                break;
        }
    })
}

//Initialize clear button and add event listener
clearBtn.addEventListener("click", () => {
    currentDisplay = 0;
    calcDisplay.innerText = currentDisplay;
})

//Initialize all clear button and add event listener
allClearBtn.addEventListener("click", () => {
    currentDisplay = 0;
    calcDisplay.innerText = 0;
    runningTotal = 0;
})

//Initialize equal button and add event listener
equalBtn.addEventListener("click", () => {
    runningTotal = runningTotal + parseInt(calcDisplay.innerText);
    calcDisplay.innerText = runningTotal;
    currentDisplay = 0;
    runningTotal = 0;
})