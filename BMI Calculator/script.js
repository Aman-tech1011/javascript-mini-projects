const button = document.querySelector("button");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result = document.querySelector("#result");

button.addEventListener("click", calculateBMI);

function calculateBMI() {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!heightInput.value || height <= 0 || Number.isNaN(height)) {
    result.textContent = "Please enter a valid height.";
    result.className = "error";
    return;
  }

  if (!weightInput.value || weight <= 0 || Number.isNaN(weight)) {
    result.textContent = "Please enter a valid weight.";
    result.className = "error";
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  result.textContent = `Your BMI is ${bmi.toFixed(2)} (${getBMICategory(bmi)}).`;
  result.className = "success";
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
