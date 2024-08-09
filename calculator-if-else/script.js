function calculate() 
{
var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);
var operator = document.getElementById('Operator').value;
var answer;
  
if (operator == 'add') {
    answer = num1 + num2;
} 
else if (operator == 'minus') {
    answer = num1 - num2;
}
else if (operator == 'multiply') {
    answer = num1 * num2;
}
else if (operator == 'divid') {
    if (num2 !== 0) {
     answer = num1 / num2;
    } 
    else {
     answer = 'Math Error';
    }
}
  
    document.getElementById('ans').value = answer;
}