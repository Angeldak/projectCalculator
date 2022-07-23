const calcBtns = document.querySelectorAll(".calcBtn");
const calcDisplay = document.querySelector(".calcDisplay");

for (let i = 0; i < calcBtns.length; i++) {
    calcBtns[i].addEventListener("click", () => {
        if (parseInt(calcBtns[i].innerText) || parseInt(calcBtns[i].innerText) === 0) {
            let currentDisplay = calcDisplay.innerText;
            if (calcDisplay.innerText.length < 10) {
                calcDisplay.innerText = currentDisplay + calcBtns[i].innerText;
                console.log(calcDisplay.innerText)
            }
        }
    })
}