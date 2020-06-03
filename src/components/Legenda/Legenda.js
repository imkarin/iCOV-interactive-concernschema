import React from 'react';
import './Legenda.css';

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
        <h4>Iconen</h4>
        <ul>
            <li>
            <img src="https://i.imgur.com/0Auqsmx.png" alt="icon" />
            <p>Departement</p>
          </li>
          <li>
            <img src="https://i.imgur.com/lDY2jKy.png" alt="icon" />
            <p>Adres</p>
          </li>
          <li>
            <img src="https://i.imgur.com/99i3sOm.png" alt="icon" />
            <p>Manager</p>
          </li>
          <li>
            <img src="https://i.imgur.com/2LaSioX.png" alt="icon" />
            <p>Sr werknemer man</p>
          </li>
          <li>
            <img src="https://i.imgur.com/Opi4ps3.png" alt="icon" />
            <p>Jr werknemer man</p>
          </li>
          <li>
            <img src="https://i.imgur.com/6jdLBUN.png" alt="icon" />
            <p>Sr werknemer vrouw</p>
          </li>
          <li>
            <img src="https://i.imgur.com/0oubFlS.png" alt="icon" />
            <p>Jr werknemer vrouw</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Legenda;

