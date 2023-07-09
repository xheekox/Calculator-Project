const add = function(a, b) 
{
    return a + b;
}

const subtract = function(a, b)
{
    return a - b;
}

const multiply = function(a, b)
{
    return a * b;
}

const divide = function(a, b)
{
    return a / b;
}

const operate = function(operator, a, b)
{
    if(operator === "+")
    {
        return add(a, b);
    } else if (operator === "-")
    {
        return subtract(a, b);
    } else if (operator === "x")
    {
        return multiply(a, b);
    } else 
    {
        return divide(a, b);
    }
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// add event listeners to buttons
const displayButton = function(button)
{
    const display = document.querySelector(".display");

    console.log(button);
    if(button.srcElement.id === "clearBtn")
    {
        display.textContent = "";
    } else if (button.srcElement.className === "numberBtn")
    {
        display.textContent += button.srcElement.textContent;
    } else if (button.srcElement.className === "equalsBtn")
    {
        secondNumber = parseInt(display.textContent);
        display.textContent = operate(operator, firstNumber, secondNumber);
    } else
    {
        operator = button.srcElement.textContent;
        firstNumber = parseInt(display.textContent);
        display.textContent = "";
    }
}

const Buttons = document.querySelectorAll('button');


Buttons.forEach((button) =>
{
    button.addEventListener('click', displayButton);
});