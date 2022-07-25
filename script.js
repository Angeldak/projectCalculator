const calcBtnNumber = document.querySelectorAll(".calcBtnNumber");
const calcBtnOperator = document.querySelectorAll(".calcBtnOperator");
const calcDisplay = document.querySelector(".calcDisplay");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const allClearBtn = document.querySelector("#allClear");

let currentDisplay = parseInt(calcDisplay.innerText);
let runningTotal = 0;

//Need to figure out how to do a max length on the display that is not a set number
//Doing math may require a variable that keeps adding on the calculators requests and then equal will runt he calculation?
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

//Initialize operators and add event listeners
for (let i = 0; i < calcBtnOperator.length; i++) {
    calcBtnOperator[i].addEventListener("click", () => {
        switch (calcBtnOperator[i].innerText) {
            case "+":
                runningTotal = runningTotal + parseInt(calcDisplay.innerText);
                currentDisplay = 0;
                calcDisplay.innerText = runningTotal;
                console.log(runningTotal);
                break;
            case "-":
                console.log("Minus");
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