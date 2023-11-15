function calculateDoses() {
  var weight = parseFloat(document.getElementById('weight').value);
  var age = parseFloat(document.getElementById('age').value);

  if (isNaN(weight) || isNaN(age) || weight <= 0) {
    alert('Please enter a valid weight and age.');
    return;
  }

  var dosePerKgParacetamol = 15;
  var maxSingleDoseMgParacetamol = 1000;
  var doseMgParacetamol = Math.min(dosePerKgParacetamol * weight, maxSingleDoseMgParacetamol);
  var doseMlParacetamol = (doseMgParacetamol / 250) * 5;

  var dosePerKgSuppository = 30;
  var maxSingleDoseMgSuppository = 250;
  var suppositoryDoseMg = Math.min(dosePerKgSuppository * weight, maxSingleDoseMgSuppository);

  // Rounding down to the nearest lower available strength (125mg or 250mg)
  suppositoryDoseMg = suppositoryDoseMg > 125 ? (suppositoryDoseMg > 250 ? 250 : 125) : 125;

  var rowParacetamol = `
  <tr>
    <td>Paracetamol</td>
    <td>250MG/5ML</td>
    <td>15MG/KG</td>
    <td class="ml-column">${doseMlParacetamol.toFixed(1)}</td> <!-- Updated to 1 decimal place -->
    <td class="mg-column">${doseMgParacetamol.toFixed(1)}</td> <!-- Updated to 1 decimal place -->
    <td>TDS/QID</td>
  </tr>`;

  var rowSuppository = `
  <tr>
    <td>Paracetamol Suppository</td>
    <td>125MG & 250MG</td>
    <td>30MG/KG</td>
    <td class="ml-column">-</td>
    <td class="mg-column">${suppositoryDoseMg.toFixed(1)}</td> <!-- Suppositories are not measured in ml -->
    <td>PRN</td>
  </tr>`;

  var tableBody = document.getElementById('medication-table').querySelector('tbody');
  tableBody.innerHTML = rowParacetamol + rowSuppository;
}

document.getElementById('dose-calculation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateDoses();
});
