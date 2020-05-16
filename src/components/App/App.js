import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Filtersection from '../Filtersection/Filtersection.js';
import Datasection from '../Datasection/Datasection.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Filtersection />
        <Datasection />
      </main>
    </div>
  );
}

export default App;
