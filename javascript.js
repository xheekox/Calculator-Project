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
let initialNumPress = true;

// add event listeners to buttons
const displayButton = function(button)
{
    const display = document.querySelector(".display");

    console.log(firstNumber);
    if(button.srcElement.id === "clearBtn")
    {
        display.textContent = "";
        firstNumber = 0;
        secondNumber = 0;
        initialNumPress = true;
    } else if (button.srcElement.className === "numberBtn")
    {
        if(initialNumPress) 
        {
            display.textContent = "";
            initialNumPress = false;
        }

        display.textContent += button.srcElement.textContent;
        initialNumPress = false;

    } else if (button.srcElement.className === "equalsBtn")
    {
        if(firstNumber != 0)
        {
            secondNumber = parseInt(display.textContent);
            display.textContent = operate(operator, firstNumber, secondNumber);
            firstNumber = parseInt(display.textContent);
            secondNumber = 0;        
        }

        initialNumPress = true;

    } else
    {
        if ( secondNumber === 0)
        {
            secondNumber = parseInt(display.textContent);
            if(operator === "") 
            {
                operator = button.srcElement.textContent;
            } 

            display.textContent = operate(operator, firstNumber, secondNumber);
            firstNumber = parseInt(display.textContent);
            secondNumber = 0;
        
        } 
        
        operator = button.srcElement.textContent;
        initialNumPress = true;

    }
}

document.querySelector(".display").textContent = "";
const Buttons = document.querySelectorAll('button');


Buttons.forEach((button) =>
{
    button.addEventListener('click', displayButton);
});