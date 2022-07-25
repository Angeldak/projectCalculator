const calcBtnNumber = document.querySelectorAll(".calcBtnNumber");
const calcBtnOperator = document.querySelectorAll(".calcBtnOperator");
const calcDisplay = document.querySelector(".calcDisplay");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const allClearBtn = document.querySelector("#allClear");

let runningTotal = 0;
let lastOperator = "";
let finalEqual = 0;

//Need to figure out how to do a max length on the display that is not a set number
//Parantheses separate variables when opening and closing

//Initialize numbers and add event listeners
for (let i = 0; i < calcBtnNumber.length; i++) {
    calcBtnNumber[i].addEventListener("click", () => {
        if (parseInt(calcDisplay.innerText) === 0) {
            if (calcDisplay.innerText.length < 10) {
                calcDisplay.innerText = parseInt(calcBtnNumber[i].innerText);
            }
        } else {
            if (calcDisplay.innerText.length < 10) {
                calcDisplay.innerText = parseInt(calcDisplay.innerText + calcBtnNumber[i].innerText);
            }
        }
    })
}

function calculate(lastOp) {
    switch (lastOp) {
        case "+":
            runningTotal = runningTotal + parseInt(calcDisplay.innerText);
            calcDisplay.innerText = 0;
            break;
        case "-":
            runningTotal = runningTotal - parseInt(calcDisplay.innerText);
            calcDisplay.innerText = 0;
            break;
        case "x":
            if (parseInt(calcDisplay.innerText) === 0 && finalEqual !== 1) {
                break;
            } else {
                runningTotal = runningTotal * parseInt(calcDisplay.innerText);
                calcDisplay.innerText = 0;
            }
            break;
        case "/":
            if (parseInt(calcDisplay.innerText) === 0 && finalEqual !== 1) {
                break;
            } else {
                runningTotal = runningTotal / parseInt(calcDisplay.innerText);
                calcDisplay.innerText = 0;
            }
            break;
        case "":
            runningTotal = parseInt(calcDisplay.innerText);
            calcDisplay.innerText = 0;
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
                    runningTotal = runningTotal + parseInt(calcDisplay.innerText);
                    calcDisplay.innerText = 0;
                } else {
                    calculate(lastOperator);
                    lastOperator = "+";
                }
                break;
            case "-":
                if (lastOperator === "-") {
                    runningTotal = runningTotal - parseInt(calcDisplay.innerText);
                    calcDisplay.innerText = 0;
                } else {
                    calculate(lastOperator);
                    lastOperator = "-";
                }
                break;
            case "/":
                if (lastOperator === "/") {
                    runningTotal = runningTotal / parseInt(calcDisplay.innerText);
                    calcDisplay.innerText = 0;
                } else {
                    calculate(lastOperator);
                    lastOperator = "/";
                }
                break;
            case "x":
                if (lastOperator === "x") {
                    runningTotal = runningTotal * parseInt(calcDisplay.innerText);
                    calcDisplay.innerText = 0;
                } else {
                    calculate(lastOperator);
                    lastOperator = "x";
                }
                break;
        }
    })
}

//Initialize clear button and add event listener
clearBtn.addEventListener("click", () => {
    calcDisplay.innerText = 0;
})

//Initialize all clear button and add event listener
allClearBtn.addEventListener("click", () => {
    calcDisplay.innerText = 0;
    runningTotal = 0;
})

//Initialize equal button and add event listener
equalBtn.addEventListener("click", () => {
    finalEqual = 1;
    calculate(lastOperator);
    calcDisplay.innerText = runningTotal;
    runningTotal = 0;
    lastOperator = "";
    finalEqual = 0;
})