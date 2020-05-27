import React from 'react';
import './Filtersection.css';

function Filtersection() {
  return (
    <div className="Filtersection">
      
      <section>
          <h2>User</h2>

          <h3>Afdeling</h3>
          <h4>Functie</h4>
            <br></br>
      </section>

      <section>
          <h2>Filter</h2>
            <br></br>

            <table>
              <tbody>

                {/* Personen */}
                <tr>
                  <td>Personen</td>
                  <td className="switchContainer">
                      <label className="switch">
                          <input type="checkbox"/>
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
                          <input type="checkbox"/>
                          <span className="slider round"></span>
                      </label>
                  </td>
                </tr>
                {/* End Vastgoed */}

                {/* Niveau */}
                <tr>
                  <td>Niveau</td>
                  <td className="switchContainer">
                      <label className="switch">
                          <input type="checkbox"/>
                          <span className="slider round"></span>
                      </label>
                  </td>
                </tr>
                {/* End Niveau */}

                {/* Relaties */}
                <tr>
                  <td>Relaties</td>
                  <td className="switchContainer">
                      <label className="switch">
                          <input type="checkbox"/>
                          <span className="slider round"></span>
                      </label>
                  </td>
                </tr>
                {/* End Relaties */}

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
