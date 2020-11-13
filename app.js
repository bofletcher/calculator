const calculator = {
  displayValue: "",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
}

const displayValue = document.getElementById("input-display");
displayValue.value = calculator.displayValue

const wrapper = document.getElementById("button-container");
wrapper.addEventListener("click", buttonClick)


function buttonClick(event) {
  let input = event.target.value;
  if(input == "=" && input != undefined) {
    calculateTotal()
  } else if (input == "+" ||input == "-"|| input == "*" || input == "/") {
      handleOperator(input)
  } else {
    let inuputNum = parseInt(input);
    console.log(input)
    updateDisplay(input)
  }
}

function updateDisplay(value) {
  calculator.displayValue += value
  displayValue.value = calculator.displayValue
}

function handleOperator(input) {
  calculator.operator = input;
  console.log(calculator.operator)
}

function calculateTotal() {
 console.log("Total")
}

