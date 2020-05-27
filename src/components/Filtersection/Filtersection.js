import React from 'react';
import './Filtersection.css';

const Filtersection = (props) => {
  return (
    <div className="Filtersection">
      <section>
        <h2>Username</h2>
        <h3>Afdeling</h3>
        <h4>Functie</h4>
      </section>

      <section>
        <h2>Filter</h2>
          <table>
            <tbody>
              {/* Personen */}
              <tr>
                <td>Personen</td>
                <td className="switchContainer">
                  <label className="switch">
                    <input type="checkbox" name="PEOPLE" value="PEOPLE" onChange={ (e) => props.update(e) } />
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
                        <input type="checkbox" name="ADDRESS" value="ADDRESS" onChange={ (e) => props.update(e) } />
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
                      <input type="checkbox" name="DEPARTMENT" value="DEPARTMENT" onChange={ (e) => props.update(e) } />
                      <span className="slider round"></span>
                  </label>
                </td>
              </tr>
              {/* End Department */}
            </tbody>
          </table>
      </section>

      <section>
        <h2>Weergave</h2>
      </section>
    </div>
  );
}

export default Filtersection;
