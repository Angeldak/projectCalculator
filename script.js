const calcBtnNumber = document.querySelectorAll(".calcBtnNumber");
const calcBtnOperator = document.querySelectorAll(".calcBtnOperator");
const calcDisplay = document.querySelector(".calcDisplay");
const clear = document.querySelector("#clear");

let currentDisplay = parseInt(calcDisplay.innerText);

//Need to figure out how to do a max length on the display that is not a set number
//Doing math may require a variable that keeps adding on the calculators requests and then equal will runt he calculation?

for (let i = 0; i < calcBtnNumber.length; i++) {
    calcBtnNumber[i].addEventListener("click", () => {
        if (parseInt(calcBtnNumber[i].innerText) || parseInt(calcBtnNumber[i].innerText) === 0) {
            if (currentDisplay === 0) {
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
        }
    })
}

clear.addEventListener("click", () => {
    currentDisplay = 0;
    calcDisplay.innerText = currentDisplay;
})