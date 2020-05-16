import React from 'react';
import './App.css';
import logo from './images/iCOV.svg';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="iCOV logo"></img>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </nav>
      </header>

      <main>
        <section>Filter section</section>
        <section>Data view section</section>
      </main>
    </div>
  );
}

export default App;
