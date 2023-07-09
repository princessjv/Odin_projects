// Function to perform the calculation based on operator and operands
const RESULT = document.querySelector(".result");
const FUNCTION = document.querySelector(".function");
const EQUALS = document.querySelector(".equals");
const BUTTONS = document.querySelectorAll('.buttons div');
var num1=""; 
var operator="";
var num2=""; 
var result="";

EQUALS.addEventListener('click', ()=>{
  prompt("hello");
});

BUTTONS.forEach((button) =>{
  button.addEventListener('click', ()=>{
    num1+=button.innerText;

    if(button.textContent .match(/[0-9]+/)){
      RESULT.innerHTML +=button.textContent ;}

    if(num1!=""){
    if (button.textContent == "-"){
      operator=button.textContent;
    FUNCTION.innerHTML = "SUBTRACTION";}
    else if (button.textContent =="*"){
      operator=button.textContent;
      FUNCTION.innerHTML = "MULTIPLICATION";}
    else if(button.textContent =="+"){
      operator=button.textContent;
      FUNCTION.innerHTML = "ADDITION";}
    else if(button.textContent =="/"){
      operator=button.textContent;
      FUNCTION.innerHTML = "DIVISION";}
    }else if(num1!="" && operator!=""){
      //num2
      if(button.textContent.match(/[0-9]+/)){
      num2+=button.innerText;}
    }
     
  });
});

function calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      FUNCTION.innerHTML = "ADDITION";
      return num1 + num2;
    case "-":
      FUNCTION.innerHTML = "SUBTRACTION";
      return num1 - num2;
    case "*":
      FUNCTION.innerHTML = "MULTIPLICATION";
      return num1 * num2;
    case "/":
      FUNCTION.innerHTML = "DIVISION";
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

//Function to read user input and perform calculation
function performCalculation() {
  var operator = prompt("Enter an operator (+, -, *, /):");
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));

  var result = calculate(operator, num1, num2);

  alert("Result: " + result);
}

//Call the function to start the calculator
performCalculation();
