var num1 = '';
var num2 = '';
var operator = null;

function printNumber(num) 
{
	if (num1 == '' || operator == null) 
	{
		num1 += num
		console.log(num1)
	}
	else if (num1 != '' && operator != null)
	{
		num2 += num
		console.log(num2)
	}
}

function printOperator(op)
{
	operator = op
}
 
function add(num1, num2)
{
	return (num1 + num2)
}

function subtract(num1, num2)
{
	return (num1 - num2)
}

function multiply(num1, num2)
{
	return (num1 * num2)
}

function divide(num1, num2)
{
	return (num1 / num2)
}

function clearing()
{
	console.log("clearing")
	num1 = ''
	num2 = ''
	result = null
	operator = null
}

function display()
{
	num1 = parseInt(num1)
	num2 = parseInt(num2)
	if (operator == "+")
	{
		result = add(num1, num2)
	}
	else if (operator == "-")
	{
		result = subtract(num1, num2)
	}
	else if (operator == "*")
	{
		result = multiply(num1, num2)
	}
	else if (operator == "%")
	{
		result = divide(num1, num2)
	}
	else
	{
		console.log("You goofed")
	}
	console.log(num1 + " " + operator + " " + num2 + " = " + result)
	clearing()
}

