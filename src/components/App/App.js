import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Filtersection from '../Filtersection/Filtersection.js';
import Datasection from '../Datasection/Datasection.js';

function App() {
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
      <Header />
      <main>
        <Filtersection update={ updateFilters } />
        <Datasection filters={ filters } />
      </main>
    </div>
  );
}

export default App;
