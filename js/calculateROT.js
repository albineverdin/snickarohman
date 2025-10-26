function calculateROT() {
  // Hämta värden från input-fälten
  const laborCost = parseFloat(document.getElementById('laborCost').value) || 0;
  const materialCost = parseFloat(document.getElementById('materialCost').value) || 0;

  // Beräkna ROT-avdrag (30% av arbetskostnad, max 50000 kr)
  const rotPercentage = 0.30;
  const maxDeduction = 50000;
  let rotDeduction = laborCost * rotPercentage;

  // Kontrollera att avdraget inte överstiger maxbeloppet
  if (rotDeduction > maxDeduction) {
    rotDeduction = maxDeduction;
  }

  // Beräkna total kostnad
  const totalCost = laborCost + materialCost - rotDeduction;

  // Visa resultat
  document.getElementById('laborDisplay').textContent = laborCost.toFixed(2);
  document.getElementById('materialDisplay').textContent = materialCost.toFixed(2);
  document.getElementById('rotDeduction').textContent = rotDeduction.toFixed(2);
  document.getElementById('totalCost').textContent = totalCost.toFixed(2);

  // Visa resultat-sektionen
  document.getElementById('result').style.display = 'block';
}