function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}
function calculate() {
    try {
        let result = eval(document.getElementById('calc-display').value);
        document.getElementById('calc-display').value = result;
    } catch (error) {
        alert("Invalid Expression");
    }
}
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    const bmi = weight / (height ** 2);
    document.getElementById('bmi-result').textContent = `BMI: ${bmi.toFixed(2)}`;
}
