function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    let expression = document.getElementById('display').value;
  
    // Check for division by zero
    if (expression.includes('/0')) {
      document.getElementById('display').value = 'Error';
      return;
    }
  
    try {
      // Evaluate the expression
      let result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  