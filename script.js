const calcBtns = document.querySelectorAll(".calcBtn");
const calcDisplay = document.querySelector(".calcDisplay");
let currentDisplay = parseInt(calcDisplay.innerText);

for (let i = 0; i < calcBtns.length; i++) {
    calcBtns[i].addEventListener("click", () => {
        if (parseInt(calcBtns[i].innerText) || parseInt(calcBtns[i].innerText) === 0) {
            if (currentDisplay === 0) {
                if (calcDisplay.innerText.length < 10) {
                    currentDisplay = calcBtns[i].innerText;
                    calcDisplay.innerText = currentDisplay;
                }
            } else {
                if (calcDisplay.innerText.length < 10) {
                    currentDisplay = currentDisplay + calcBtns[i].innerText;
                    calcDisplay.innerText = currentDisplay;
                }
            }
        }
    })
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    currentDisplay = 0;
    calcDisplay.innerText = currentDisplay;
})