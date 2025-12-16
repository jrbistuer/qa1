result = [];

function appendToDisplay(value) {
    const operationsDiv = document.getElementById('operations');
    if (operationsDiv.textContent === '0') {
        operationsDiv.textContent = '';
    }
    operationsDiv.textContent += value;
}

function clearDisplay() {
    document.getElementById('operations').textContent = '0';
    document.getElementById('result').textContent = '0';
}

function deleteLastCharacter() {
    const operationsDiv = document.getElementById('operations');
    if (operationsDiv.textContent.length > 1) {
        operationsDiv.textContent = operationsDiv.textContent.slice(0, -1);
    } else {
        operationsDiv.textContent = '0';
    } 
}

function calculateResult() {
    const operationsDiv = document.getElementById('operations');
    try {
        const result = eval(operationsDiv.textContent);
        document.getElementById('result').textContent = result;
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
}
