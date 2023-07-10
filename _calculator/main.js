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
    

    if(button.textContent .match(/[0-9]+/)){
      num1+=button.innerText;
      RESULT.innerHTML +=button.textContent ;}

    if(num1!=""){
    if (button.textContent == "-"){
      operator=button.innerText;
      RESULT.innerHTML="";
      RESULT.innerHTML=button.innerText;
    FUNCTION.innerHTML = "SUBTRACTION";}
    else if (button.textContent =="*"){
      operator=button.innerText;
      RESULT.innerHTML="";
      RESULT.innerHTML=button.innerText;
      FUNCTION.innerHTML = "MULTIPLICATION";}
    else if(button.textContent =="+"){
      operator=button.innerText;
      RESULT.innerHTML="";
      RESULT.innerHTML=button.innerText;
      FUNCTION.innerHTML = "ADDITION";}
    else if(button.textContent =="/"){
      operator=button.innerText;
      RESULT.innerHTML="";
      RESULT.innerHTML=button.innerText;
      FUNCTION.innerHTML = "DIVISION";}
    }else if(num1!="" && operator!=""){
      //num2
      if(button.textContent.match(/[0-9]+/)){
      num2+=button.innerText;}
      //ready for any mathematical operations
    }else if(num1!=""&&num2!=""&&operator!=""){
      if (button.textContent == "-"){
        operator=button.textContent;
        result=num1-num2;
      FUNCTION.innerHTML = "SUBTRACTION";}
      else if (button.textContent =="*"){
        operator=button.textContent;
        result=num1*num2;
        FUNCTION.innerHTML = "MULTIPLICATION";}
      else if(button.textContent =="+"){
        operator=button.textContent;
        result=num1+num2;
        FUNCTION.innerHTML = "ADDITION";}
      else if(button.textContent =="/"){
        operator=button.textContent;
        result=num1/num2;
        FUNCTION.innerHTML = "DIVISION";}

        RESULT.innerHTML = result;
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
