import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Filtersection from './components/Filtersection/Filtersection.js';
import Datasection from './components/Datasection/Datasection.js';

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
