import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Filtersection from './components/Filtersection/Filtersection.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Filtersection />
        <section>Data view section</section>
      </main>
    </div>
  );
}

export default App;
