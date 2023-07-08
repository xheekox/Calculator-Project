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