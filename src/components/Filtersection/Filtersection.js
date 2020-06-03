import React from 'react';
import './Filtersection.css';

const Filtersection = (props) => {
  return (
    <div className="Filtersection">

      <section id="Userbox">

        <h3>Welkom, </h3>
        <h3>Deborah Felix</h3>
        <h4>Ondermijning</h4>
        <h5>Accountmanager</h5>
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
          <input type="radio" id="concernSchema" name="Layoutbox" value="concernSchema" checked="checked"/>
              <label for="Concernschema">Concernschema</label><br/>
        </span>

        <span className="rbnContainer">
          <input type="radio" id="structuurSchema" name="Layoutbox" value="structuurSchema"/>
              <label for="structuurSchema">Structuurschema</label><br/>
        </span>

        <span className="rbnContainer">
          <input type="radio" id="kaartSchema" name="Layoutbox" value="kaartSchema" />
              <label for="kaartSchema">Kaart</label><br/>
        </span>

        <span className="rbnContainer">
          <input type="radio" id="tijdlijnSchema" name="Layoutbox" value="tijdlijnSchema"/>
              <label for="tijdlijnSchema">Tijdlijn</label>
        </span>

      </section>
    </div>
  );
}

export default Filtersection;

