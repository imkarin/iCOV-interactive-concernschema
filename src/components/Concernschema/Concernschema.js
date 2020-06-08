import React, { useState } from 'react';
import './Concernschema.css';
import Filtersection from '../Filtersection/Filtersection.js';
import Datasection from '../Datasection/Datasection.js';
import Legenda from '../Legenda/Legenda.js';

function Concernschema() {
  let [filters, setFilters] = useState(["PEOPLE", "ADDRESS", "DEPARTMENT"]);

  function updateFilters(e) {
    // Update the filters
    const newFilters = [...filters]

    if(e.target.checked === true) {
      newFilters.push(e.target.name)
      setFilters(newFilters);
    } else if (e.target.checked === false) {
      const itemIndex = newFilters.indexOf(e.target.name)
      newFilters.splice(itemIndex, 1)
      setFilters(newFilters)
    }
  }

  return (
    <div className="App">
      <main>
        <Filtersection update={ updateFilters } />
        <Datasection filters={ filters } />
        <Legenda />
      </main>
    </div>
  );
}

export default Concernschema;
