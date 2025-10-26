










function calculateROT() {
  // Set values to input values or zero (no input)
  const laborCost = parseFloat(document.getElementById('laborCost').value) || 0;
  const materialCost = parseFloat(document.getElementById('materialCost').value) || 0;

  // Calculate ROT-deduction (30% off of labour cost, maximum 50.000 sek / year)
  const rotPercentage = 0.30;
  const maxDeduction = 50000;
  let rotDeduction = laborCost * rotPercentage;

  // Check whether deduction is bigger than max value
  if (rotDeduction > maxDeduction) {
    rotDeduction = maxDeduction;
  }

  // Total cost
  const totalCost = laborCost + materialCost - rotDeduction;

  // Set values for results
  document.getElementById('laborDisplay').textContent = laborCost.toFixed(2);
  document.getElementById('materialDisplay').textContent = materialCost.toFixed(2);
  document.getElementById('rotDeduction').textContent = rotDeduction.toFixed(2);
  document.getElementById('totalCost').textContent = totalCost.toFixed(2);

  // Display results div
  document.getElementById('result').style.display = 'block';
}









