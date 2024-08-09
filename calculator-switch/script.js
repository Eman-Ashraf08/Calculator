function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('Operator').value;
    var answer;
  
    switch (operator) {
      case "add":
        answer = num1 + num2;
        break;
      case 'minus':
        answer = num1 - num2;
        break;
      case 'multiply':
        answer = num1 * num2;
        break;
      case 'divid':
        answer = num1 / num2;
        break;
      default:
        answer = "Invalid operator";
        break;
    }
  
    document.getElementById('result').value = answer;
  }
  