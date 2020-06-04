import React from 'react';
import './Legenda.css';

import seniorMedewerkerMan from '../../assets/images/icons/Man.Sr.png';
import juniorMedewerkerMan from '../../assets/images/icons/Man.Jr.png';

import seniorMedewerkerVrouw from '../../assets/images/icons/Vrouw.Sr.png';
import juniorMedewerkerVrouw from '../../assets/images/icons/Vrouw.Jr.png';

import managerMan from '../../assets/images/icons/Man.Manager.png';
import managerVrouw from '../../assets/images/icons/Vrouw.Manager.png';

import nietWerkzaamMan from '../../assets/images/icons/Man.NW.png';
import nietWerkzaamVrouw from '../../assets/images/icons/Vrouw.NW.png';


import bedrijfActief from '../../assets/images/icons/Bedrijf.A.png';
import bedrijfInactief from '../../assets/images/icons/Bedrijf.A.png';

import adresWoonWerk from '../../assets/images/icons/WWAdres.png';

import belastingsdienstDossier from '../../assets/images/icons/BDDossier.png';


const Legenda = () => {
function openLegenda() {
  document.querySelector(".Legenda").classList.toggle("open")
}

  return (
    <section className="Legenda" onClick={ openLegenda }>
      <div className="label">
        <p>Legenda</p>
      </div>
      <div className="items">

   

      <table>
	<tbody>
		<tr>
			<td><h2>Legenda</h2></td>
			<td><h2>X</h2></td>
		</tr>
	</tbody>
</table>

        <h3>Iconen</h3>

        <h4>Personen</h4>


        <table >
	<tbody>
		<tr>
			<td> <img src={juniorMedewerkerMan} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Junior Medewerker</span> - Man</p></td>
		</tr>
		<tr>
    <td> <img src={seniorMedewerkerMan} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Senior Medewerker</span> - Man</p></td>
		</tr>
		<tr>
    <td> <img src={juniorMedewerkerVrouw} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Junior Medewerker</span> - Vrouw</p></td>
		</tr>
		<tr>
    <td> <img src={seniorMedewerkerVrouw} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Senior Medewerker</span> - Vrouw</p></td>
		</tr>
		<tr>
    <td> <img src={managerMan} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Manager</span> - Man</p></td>
		</tr>
		<tr>
    <td> <img src={managerVrouw} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Manager</span> - Vrouw</p></td>
		</tr>
		<tr>
    <td> <img src={nietWerkzaamMan} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Niet Meer Werkzaam</span> - Man</p></td>
		</tr>
		<tr>
    <td> <img src={nietWerkzaamVrouw} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Niet Meer Werkzaam</span> - Vrouw</p></td>
		</tr>
	</tbody>
</table>






       


        <h4>Overig</h4>



        <table >
	<tbody>
		<tr>
			<td> <img src={bedrijfActief} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Bedrijf</span> - Actief</p></td>
		</tr>
		<tr>
    <td> <img src={bedrijfInactief} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Bedrijf</span> - Inactief</p></td>
		</tr>
		<tr>
    <td> <img src={adresWoonWerk} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Adres</span> - Woon/Werk</p></td>
		</tr>
		<tr>
    <td> <img src={belastingsdienstDossier} alt="icon" /> </td>
			<td> <p><span className="iconLabel">Belastingsdienstdossier</span></p></td>
		</tr>
	
	</tbody>
</table>









      </div>
    </section>
  );
}

export default Legenda;

