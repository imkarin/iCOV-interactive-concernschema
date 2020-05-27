import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Filtersection from '../Filtersection/Filtersection.js';
import Datasection from '../Datasection/Datasection.js';

function App() {
  let [filters, setFilters] = useState(["PEOPLE", "ADDRESS", "DEPARTMENT"]);

  function updateFilters() {
    setFilters(["PEOPLE"]);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Filtersection />
        <button onClick={ updateFilters }>Update filters!</button>
        <Datasection filters={ filters } />
      </main>
    </div>
  );
}

export default App;
