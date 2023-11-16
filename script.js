function calculateDoses() {
  var weight = parseFloat(document.getElementById('weight').value);
  var age = parseFloat(document.getElementById('age').value);

  if (isNaN(weight) || isNaN(age) || weight <= 0) {
    alert('Please enter a valid weight and age.');
    return;
  }
  
	// Paracetamol calculation
  var dosePerKgParacetamol = 15;
  var maxSingleDoseMgParacetamol = 1000;
  var doseMgParacetamol = Math.min(dosePerKgParacetamol * weight, maxSingleDoseMgParacetamol);
  var doseMlParacetamol = (doseMgParacetamol / 250) * 5;

	 // Paracetamol Suppository calculation
  var dosePerKgSuppository = 30;
  var maxSingleDoseMgSuppository = 250;
  var suppositoryDoseMg = Math.min(dosePerKgSuppository * weight, maxSingleDoseMgSuppository);
   
    // Promethazine calculation
  var dosePerKgPromethazine = 0.3;
  var maxSingleDoseMgPromethazine = 8;
  var doseMgPromethazine, doseMlPromethazine;
  var promethazineDisplayMg, promethazineDisplayMl;
    
  if(age < 2) {
    promethazineDisplayMg = "CONTRAINDICATED";
    promethazineDisplayMl = "CONTRAINDICATED";
  } else {
    doseMgPromethazine = Math.min(dosePerKgPromethazine * weight, maxSingleDoseMgPromethazine);
    doseMlPromethazine = (doseMgPromethazine / 5) * 5; 
    promethazineDisplayMg = doseMgPromethazine.toFixed(1);
    promethazineDisplayMl = doseMlPromethazine.toFixed(1);
  }
  
  // Prednisolone calculation
  var dosePerKgPrednisolone = 1;
  var doseMgPrednisolone = dosePerKgPrednisolone * weight;
  var doseMlPrednisolone = (doseMgPrednisolone / 2.5) * 5; 

	// Amoxycillin calculation
  var dosePerKgAmoxycillin = 15;
  var maxSingleDoseMgAmoxycillin = 500;
  var doseMgAmoxycillin = Math.min(dosePerKgAmoxycillin * weight, maxSingleDoseMgAmoxycillin);
  var doseMlAmoxycillin = (doseMgAmoxycillin / 250) * 5; 

	// Cephalexin calculation
  var dosePerKgCephalexin = 25;
  var maxSingleDoseMgCephalexin = 500;
  var doseMgCephalexin = Math.min(dosePerKgCephalexin * weight, maxSingleDoseMgCephalexin);
  var doseMlCephalexin = (doseMgCephalexin / 125) * 5; 
  
  	// Cloxacillin calculation
  var dosePerKgCloxacillin = 15;
  var maxSingleDoseMgCloxacillin = 600;
  var doseMgCloxacillin = Math.min(dosePerKgCloxacillin * weight, maxSingleDoseMgCloxacillin);
  var doseMlCloxacillin = (doseMgCloxacillin / 125) * 5; 
  
    // Erythromycin calculation
  var dosePerKgErythromycin = 20;
  var maxSingleDoseMgErythromycin = 800;
  var doseMgErythromycin = Math.min(dosePerKgErythromycin * weight, maxSingleDoseMgErythromycin);
  var doseMlErythromycin = (doseMgErythromycin / 400) * 5; 

	// AUGMENTIN calculation
  var dosePerKgAUGMENTIN = 20;
  var maxSingleDoseMgAUGMENTIN = 570;
  var doseMgAUGMENTIN = Math.min(dosePerKgAUGMENTIN * weight, maxSingleDoseMgAUGMENTIN);
  var doseMlAUGMENTIN = (doseMgAUGMENTIN / 228) * 5; 

	// Diphenhydramine calculation
  var doseMgDiphenhydramine;
  if (age < 2) {
    doseMgDiphenhydramine = "CONTRAINDICATED";
  } else if (age < 6) {
    doseMgDiphenhydramine = Math.min(1 * weight, 3.5); // 1mg/kg, capped at 3.5mg for ages 2 to 6
  } else {
    doseMgDiphenhydramine = Math.min(1 * weight, 7); // 1mg/kg, capped at 7mg for ages over 6
  }

  var doseMlDiphenhydramine = doseMgDiphenhydramine !== "CONTRAINDICATED" ? (doseMgDiphenhydramine / 7) * 5 : "CONTRAINDICATED"; // Assuming 7MG/5ML strength
  
	// Bromhexine calculation
  var doseMgBromhexine;
  if (age < 2) {
    doseMgBromhexine = Math.min(0.3 * weight, 0.96); // Capped at 0.96mg for ages under 2
  } else if (age < 6) {
    doseMgBromhexine = Math.min(0.3 * weight, 2); // Capped at 2mg for ages 2 to 6
  } else {
    doseMgBromhexine = Math.min(0.3 * weight, 4); // Capped at 4mg for ages over 6
  }

  var doseMlBromhexine = (doseMgBromhexine / 4) * 5; // Assuming 4MG/5ML strength

	// Salbutamol calculation
  var doseMgSalbutamol;
  if (age < 2) {
    doseMgSalbutamol = "CONTRAINDICATED";
  } else if (age < 6) {
    doseMgSalbutamol = Math.min(0.15 * weight, 1); 
  } else {
    doseMgSalbutamol = Math.min(0.15 * weight, 2); 
  }

  var doseMlSalbutamol = doseMgSalbutamol !== "CONTRAINDICATED" ? (doseMgSalbutamol / 2) * 5 : "CONTRAINDICATED"; 
  
	// Isoniazid calculation
  var dosePerKgIsoniazid = age < 10 ? 10 : 5; // 10mg/kg if under 10 years old, otherwise 5mg/kg
  var doseMgIsoniazid = dosePerKgIsoniazid * weight;
  var doseMlIsoniazid = doseMgIsoniazid / 40; // 40MG/ML strength

  // Chlorpheniramine calculation
  var doseMgChlorpheniramine;
  if (age < 2) {
    doseMgChlorpheniramine = "CONTRAINDICATED";
  } else {
    doseMgChlorpheniramine = Math.min(0.1 * weight, age <= 5 ? 1 : 2); 
  }
  var doseMlChlorpheniramine = doseMgChlorpheniramine !== "CONTRAINDICATED" ? (doseMgChlorpheniramine / 2) * 5 : "CONTRAINDICATED"; // Assuming 2MG/5ML strength

 // Lactulose calculation
  var doseMlLactulose = 0.5 * weight; 
  
  // Ferric Ammonium Citrate (Prophylaxis) calculation
  var doseMlFerricAmmoniumCitrate = (2 * weight) * 5 / 84; // Formula based on weight

	// Ferric Ammonium Citrate (Treatment) calculation
  var doseMlFerricAmmoniumCitrateTreatment = (6 * weight) * 5 / 84; // Formula based on weight
  
  // Nystatin calculation
  var doseMlNystatin = age < 2 ? 1 : 5; // 1 ml for <2 years old, 5 ml for >=2 years old	

	// Albendazole Syrup calculation	
  var doseMlAlbendazole;
  if (age < 1) {
    doseMlAlbendazole = "CONTRAINDICATED";
  } else if (age < 2) {
    doseMlAlbendazole = "5.0";
  } else {
    doseMlAlbendazole = "10.0";
  }
  
   // Albendazole Tablet calculation
  var doseTabletsAlbendazole;
  if (age < 1) {
    doseTabletsAlbendazole = "CONTRAINDICATED";
  } else if (age < 2) {
    doseTabletsAlbendazole = "1";
  } else {
    doseTabletsAlbendazole = "2";
  }
  
  // Multivitamin Syrup calculation
  var doseMlMultivitamin;
  if (age < 1) {
    doseMlMultivitamin = "CONTRAINDICATED";
  } else if (age < 4) {
    doseMlMultivitamin = "1";
  } else {
    doseMlMultivitamin = "2.5";
  }


	//Row in table
  var rowParacetamol = `
  <tr>
    <td>Paracetamol</td>
	<td class="ml-column">${doseMlParacetamol.toFixed(1)}</td> 
    <td class="mg-column">${doseMgParacetamol.toFixed(1)}</td> 
    <td>TDS/QID</td>
    <td>250MG/5ML</td>
    <td>15MG/KG</td>
    <td>Maxiumum dose 1000mg</td>
  </tr>`;

  var rowSuppository = `
  <tr>
    <td>Paracetamol Suppository</td>
	<td class="ml-column">-</td>
	<td class="mg-column">${suppositoryDoseMg.toFixed(1)}</td> <!-- Suppositories are not measured in ml -->
    <td>PRN</td>
	<td>125MG & 250MG</td>
    <td>30MG/KG</td>
    <td>Prescribe nearest lower available strength (125mg / 250mg)</td>
  </tr>`;
  
  var rowPromethazine = `
  <tr>
    <td>Promethazine</td>
	<td class="ml-column">${promethazineDisplayMl}</td> 
    <td class="mg-column">${promethazineDisplayMg}</td> 
    <td>TDS</td>
    <td>5MG/5ML</td>
    <td>0.3MG/KG</td>
    <td>Maxiumum dose 8mg</td>
  </tr>`;
  
  var rowPrednisolone = `
  <tr>
    <td>Prednisolone</td>
    <td class="ml-column">${doseMlPrednisolone.toFixed(1)}</td>
    <td class="mg-column">${doseMgPrednisolone.toFixed(1)}</td>
    <td>OD</td> 
    <td>2.5MG/5ML</td>
    <td>1MG/KG</td>
    <td>-</td> 
  </tr>`;
  
  var rowAmoxycillin = `
  <tr>
    <td>Amoxycillin</td>
    <td class="ml-column">${doseMlAmoxycillin.toFixed(1)}</td>
    <td class="mg-column">${doseMgAmoxycillin.toFixed(1)}</td>
    <td>TDS</td> 
    <td>250MG/5ML</td>
    <td>15MG/KG</td>
    <td>Maximum dose 500mg</td>
  </tr>`;
  
  var rowCephalexin = `
  <tr>
    <td>Cephalexin</td>
    <td class="ml-column">${doseMlCephalexin.toFixed(1)}</td>
    <td class="mg-column">${doseMgCephalexin.toFixed(1)}</td>
    <td>BD</td> 
    <td>125MG/5ML</td>
    <td>25MG/KG</td>
    <td>Maximum dose 500mg</td>
  </tr>`;
  
  var rowCloxacillin = `
  <tr>
    <td>Cloxacillin</td>
    <td class="ml-column">${doseMlCloxacillin.toFixed(1)}</td>
    <td class="mg-column">${doseMgCloxacillin.toFixed(1)}</td>
    <td>QID</td> 
    <td>125MG/5ML</td>
    <td>15MG/KG</td>
    <td>Maximum dose 600mg</td>
  </tr>`;
  
  var rowErythromycin = `
  <tr>
    <td>Erythromycin</td>
    <td class="ml-column">${doseMlErythromycin.toFixed(1)}</td>
    <td class="mg-column">${doseMgErythromycin.toFixed(1)}</td>
    <td>BD</td> 
    <td>400MG/5ML</td>
    <td>20MG/KG</td>
    <td>Maximum dose 800mg</td>
  </tr>`;
  
  var rowAUGMENTIN = `
  <tr>
    <td>AUGMENTIN</td>
    <td class="ml-column">${doseMlAUGMENTIN.toFixed(1)}</td>
    <td class="mg-column">${doseMgAUGMENTIN.toFixed(1)}</td>
    <td>BD</td> 
    <td>228MG/5ML</td>
    <td>20MG/KG</td>
    <td>Maximum dose 570mg</td>
  </tr>`;
  
  var rowDiphenhydramine = `
  <tr>
    <td>Diphenhydramine</td>
    <td class="ml-column">${typeof doseMlDiphenhydramine === "number" ? doseMlDiphenhydramine.toFixed(1) : doseMlDiphenhydramine}</td>
    <td class="mg-column">${typeof doseMgDiphenhydramine === "number" ? doseMgDiphenhydramine.toFixed(1) : doseMgDiphenhydramine}</td>
    <td>TDS</td> 
    <td>7MG/5ML</td>
    <td>1MG/KG</td>
    <td>Max 3.5mg (2-6 yrs), 7mg (>6 yrs)</td>
  </tr>`;
  
  var rowBromhexine = `
  <tr>
    <td>Bromhexine</td>
    <td class="ml-column">${doseMlBromhexine.toFixed(1)}</td>
    <td class="mg-column">${doseMgBromhexine.toFixed(1)}</td>
    <td>TDS</td> 
    <td>4MG/5ML</td>
    <td>0.3MG/KG</td>
    <td>Max 0.96mg (<2 yrs), 2mg (2-6 yrs), 4mg (>6 yrs)</td>
  </tr>`;
  
  var rowSalbutamol = `
  <tr>
    <td>Salbutamol</td>
    <td class="ml-column">${typeof doseMlSalbutamol === "number" ? doseMlSalbutamol.toFixed(1) : doseMlSalbutamol}</td>
    <td class="mg-column">${typeof doseMgSalbutamol === "number" ? doseMgSalbutamol.toFixed(1) : doseMgSalbutamol}</td>
    <td>TDS/QID</td> 
    <td>2MG/5ML</td>
    <td>0.15MG/KG</td>
    <td>Max 1mg (2-6 yrs), 2mg (>6 yrs)</td>
  </tr>`;
  
  var rowIsoniazid = `
  <tr>
    <td>Isoniazid</td>
    <td class="ml-column">${doseMlIsoniazid.toFixed(1)}</td>
    <td class="mg-column">${doseMgIsoniazid.toFixed(1)}</td>
    <td>OD</td> 
    <td>40MG/ML</td>
    <td><10 yo: 10mg/kg, =>10yo: 5mg/kg</td>
    <td>-</td> 
  </tr>`;
  
  var rowChlorpheniramine = `
  <tr>
    <td>Chlorpheniramine</td>
    <td class="ml-column">${typeof doseMlChlorpheniramine === "number" ? doseMlChlorpheniramine.toFixed(1) : doseMlChlorpheniramine}</td>
    <td class="mg-column">${typeof doseMgChlorpheniramine === "number" ? doseMgChlorpheniramine.toFixed(1) : doseMgChlorpheniramine}</td>
    <td>TDS</td> <!-- Frequency -->
    <td>2MG/5ML</td>
    <td>0.1MG/KG</td>
    <td>Max 1mg (<=5 yrs), 2mg (> 5 yrs)</td>
  </tr>`;
  
  var rowLactulose = `
  <tr>
    <td>Lactulose</td>
    <td class="ml-column">${doseMlLactulose.toFixed(1)}</td>
    <td class="mg-column">-</td> 
    <td>OD/BD</td> 
    <td>3.35G/5ML</td>
    <td>0.5ML/KG</td>
    <td>-</td> 
  </tr>`;
  
  var rowFerricAmmoniumCitrate = `
  <tr>
    <td>Ferric Ammonium Citrate (Prophylaxis)</td>
    <td class="ml-column">${doseMlFerricAmmoniumCitrate.toFixed(1)}</td>
    <td class="mg-column">-</td> <!-- No mg calculation required -->
    <td>OD</td> <!-- Frequency -->
    <td>400MG/5ML</td>
    <td>${(2*5/84).toFixed(2)}ML/KG</td>
    <td>-</td> 
  </tr>`;
  
   var rowFerricAmmoniumCitrateTreatment = `
  <tr>
    <td>Ferric Ammonium Citrate (Treatment)</td>
    <td class="ml-column">${doseMlFerricAmmoniumCitrateTreatment.toFixed(1)}</td>
    <td class="mg-column">-</td> <!-- No mg calculation required -->
    <td>OD</td> <!-- Frequency -->
    <td>400MG/5ML</td>
    <td>${(6*5/84).toFixed(2)}ML/KG</td>
    <td>-</td>
  </tr>`;
  
  var rowNystatin = `
  <tr>
    <td>Nystatin</td>
    <td class="ml-column">${doseMlNystatin}</td>
    <td class="mg-column">${doseMlNystatin}</td> <!-- Same as ml since 1MG/ML strength -->
    <td>QID</td> 
    <td>100000IU/ML</td>
    <td> < 12 MONTH-OLD	100000IU, >12 MONTH-OLD	500000IU</td> 
    <td>-</td> 
  </tr>`;
  
  var rowAlbendazole = `
  <tr>
    <td>Albendazole Syrup</td>
    <td class="ml-column">${doseMlAlbendazole}</td>
    <td class="mg-column">-</td> 
    <td>STAT</td>
    <td>200MG/5ML</td>
    <td>1-2 YEAR-OLD: 200mg, ≥ 2 YEAR-OLD: 400mg</td> 
    <td>-</td> 
  </tr>`;
  
  var rowAlbendazoleTablet = `
  <tr>
    <td>Albendazole Tablet</td>
    <td class="ml-column">-</td> <!-- No ml unit for tablet -->
    <td class="mg-column">${doseTabletsAlbendazole !== "CONTRAINDICATED" ? doseTabletsAlbendazole * 200 : doseTabletsAlbendazole}</td> <!-- 200mg per tablet -->
    <td>STAT</td> <!-- Frequency -->
    <td>200MG/TABLET</td>
    <td>-</td> <!-- Dosage per kg not applicable -->
    <td>${doseTabletsAlbendazole} tablet/s </td> <!-- Number of tablets -->
  </tr>`;
  
  var rowMultivitamin = `
  <tr>
    <td>Multivitamin Syrup</td>
    <td class="ml-column">${doseMlMultivitamin}</td>
    <td class="mg-column">${doseMlMultivitamin !== "CONTRAINDICATED" ? (parseFloat(doseMlMultivitamin) * 1).toFixed(1) : doseMlMultivitamin}</td> <!-- 1mg/ml strength -->
    <td>OD</td> <!-- Frequency -->
    <td>1MG/ML</td>
    <td>-</td> <!-- Dosage per kg not applicable -->
    <td>-</td> <!-- Additional information if needed -->
  </tr>`;

  var tableBody = document.getElementById('medication-table').querySelector('tbody');
  tableBody.innerHTML = rowParacetamol + rowSuppository + rowPromethazine + rowPrednisolone + rowAmoxycillin + rowCephalexin + rowCloxacillin + rowErythromycin + rowAUGMENTIN
  + rowDiphenhydramine + rowBromhexine + rowSalbutamol + rowIsoniazid + rowChlorpheniramine + rowLactulose + rowFerricAmmoniumCitrate + rowFerricAmmoniumCitrateTreatment 
  +rowNystatin + rowAlbendazole +rowAlbendazoleTablet + rowMultivitamin;
}

document.getElementById('dose-calculation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateDoses();
});

