import React from 'react';
import './Loginpage.css';
import profilepicture from '../../assets/images/profielfoto.png';

function Loginpage() {
  return (
    <main class="Loginpage">
      
      <section>
        <img alt="profilepicture" src={ profilepicture }></img>
        <h2>M. Houtman</h2>
        <p>ZW Manager</p>
        <p>Politie Amersfoort</p>

        <form action="/Userportal">
          <label htmlFor="password">Wachtwoord</label>
          <input id="password" type="password" />
          <input type="submit" value="Inloggen"></input>
        </form>
      </section>

    </main>
  );
}

export default Loginpage;
