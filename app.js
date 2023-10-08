import { Calculator } from "./Calculator.js";

const previousValueText = document.querySelector(".previous-value-text");
const currentValueText = document.querySelector(".current-value-text");

const calculator = new Calculator(previousValueText, currentValueText);

const container = document.querySelector(".buttons-container");

container.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("button[data-clear]")) {
        calculator.clear();
    } else if (target.matches("button[data-delete], button[data-back-delete]")) {
        calculator.delete();
    } else if (target.matches("button[data-equals]")) {
        calculator.compute();
    } else if (target.matches("button[data-number]")) {
        calculator.appendNumber(target.innerHTML);
    } else if (target.matches("button[data-operation]")) {
        calculator.chooseOperation(target.innerHTML);
    }

    calculator.updateDisplay();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
        calculator.delete();
        calculator.updateDisplay();
    }
});
