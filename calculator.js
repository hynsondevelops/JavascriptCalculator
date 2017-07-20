var num1;
var num2;
function printNumber(num) 
{
	num = parseInt(num)
	console.log(num)
	if (num1 == null) 
	{
		num1 = num
	}
	else if (num2 == null)
	{
		num2 = num
	}
	else 
	{
		console.log(num1)
		console.log(" + ")
		console.log(num2)
		console.log(" = ")
		console.log(add(num1, num2))
		console.log(subtract(num1, num2))
		console.log(multiply(num1, num2))
		console.log(divide(num1, num2))

	}

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