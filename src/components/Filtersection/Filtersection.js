import React from 'react';
import './Filtersection.css';

import Rijksoverheid from '../../assets/images/Rijksoverheid.png';

const Filtersection = (props) => {
  return (
    <div className="Filtersection">

      <section id="Userbox">

      <h3>Welkom,</h3>
        <h1>D. Felix</h1>
        <h4>Ondermijning</h4>
        <h4>Accountmanager</h4>
      </section>

      <section id="Filterbox">
        <h2>Filter</h2>
          <table>
            <tbody>
              {/* Personen */}
              <tr>
                <td>Personen</td>
                <td className="switchContainer">
                  <label className="switch">
                    <input type="checkbox" name="PEOPLE" value="PEOPLE" defaultChecked onChange={ (e) => props.update(e) }/>
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>
              {/* End Personen */}

              {/* Vastgoed */}
              <tr>
                <td>Vastgoed</td>
                <td className="switchContainer">
                    <label className="switch">
                        <input type="checkbox" name="ADDRESS" value="ADDRESS" defaultChecked onChange={ (e) => props.update(e) } />
                        <span className="slider round"></span>
                    </label>
                </td>
              </tr>
              {/* End Vastgoed */}

              {/* Department */}
              <tr>
                <td>Department</td>
                <td className="switchContainer">
                  <label className="switch">
                      <input type="checkbox" name="DEPARTMENT" value="DEPARTMENT" defaultChecked onChange={ (e) => props.update(e) } />
                      <span className="slider round"></span>
                  </label>
                </td>
              </tr>
              {/* End Department */}
            </tbody>
          </table>
      </section>

      <section id="Layoutbox">
        <h2>Weergave</h2>

        <span className="rbnContainer">
          <label>
            <input type="radio" id="concernSchema" name="Layoutbox" value="concernSchema" defaultChecked />
            Concernschema
          </label>
        </span>

        <span className="rbnContainer">
          <label>
            <input type="radio" id="structuurSchema" name="Layoutbox" value="structuurSchema"/>
            Structuurschema
          </label>
        </span>

        <span className="rbnContainer">
          <label>
            <input type="radio" id="kaartSchema" name="Layoutbox" value="kaartSchema" />
            Kaart
          </label>
        </span>

        <span className="rbnContainer">
          <label>
            <input type="radio" id="tijdlijnSchema" name="Layoutbox" value="tijdlijnSchema"/>
            Tijdlijn
          </label>
        </span>

        <img src={Rijksoverheid} alt="Rijksoverheid Logo" className="Rijksoverheid"></img>

      </section>

    </div>



    

  );
}

export default Filtersection;

