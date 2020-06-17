import React from 'react';
import './Userportal.css';

import { FaSearch } from "react-icons/fa";
import nodePreview from '../../assets/images/nodePreview.png';


function Userportal() {
  return(

  <section className="Userportal">

    <div className="Filtersection">
      <section id="Userbox">
          <h3>Welkom,</h3>
          <h1>D. Felix</h1>
          <h4>Ondermijning</h4>
          <h4>Accountmanager</h4>
      </section>
    </div>


   
  <section className="Portalbody">


    

    <form className="example" action="/action_page.php">
  <input type="text" placeholder="Zoeken.." name="search2"></input>
  <button type="submit"><FaSearch></FaSearch></button>
    </form>

    <section className="GoedgekeurdeAanvragen">
      
      <span className="underline">
        <h2>Goedgekeurde aanvragen</h2>
      </span>

        <section className="AanvraagContainer">
          

            <a href="#/Concernschema">
              <div className="Aanvraag">
                  <div className="AanvraagBox">
                    <h3>A. Awan</h3>
                    <img src={nodePreview} alt="icon" />
                  </div>
                  
                      <table>
                        <tbody>
                          <tr>
                            <td>Datum Aanvraag</td>
                            <td>11-06-2020</td>
                          </tr>
                          <tr>
                            <td>Datum Goedkeuring</td>
                            <td>11-06-2020</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </a>

            <a href="#/Concernschema">
              <div className="Aanvraag">
                  <div className="AanvraagBox">
                    <h3>A. Awan</h3>
                    <img src={nodePreview} alt="icon" />
                  </div>
                  
                      <table>
                        <tbody>
                          <tr>
                            <td>Datum Aanvraag</td>
                            <td>11-06-2020</td>
                          </tr>
                          <tr>
                            <td>Datum Goedkeuring</td>
                            <td>11-06-2020</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </a>


            <a href="#/Concernschema">
              <div className="Aanvraag">
                  <div className="AanvraagBox">
                    <h3>A. Awan</h3>
                    <img src={nodePreview} alt="icon" />
                  </div>
                  
                      <table>
                        <tbody>
                          <tr>
                            <td>Datum Aanvraag</td>
                            <td>11-06-2020</td>
                          </tr>
                          <tr>
                            <td>Datum Goedkeuring</td>
                            <td>11-06-2020</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </a>


            <a href="#/Concernschema">
              <div className="Aanvraag">
                  <div className="AanvraagBox">
                    <h3>A. Awan</h3>
                    <img src={nodePreview} alt="icon" />
                  </div>
                  
                      <table>
                        <tbody>
                          <tr>
                            <td>Datum Aanvraag</td>
                            <td>11-06-2020</td>
                          </tr>
                          <tr>
                            <td>Datum Goedkeuring</td>
                            <td>11-06-2020</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </a>


            <a href="/Concernschema">
              <div className="Aanvraag">
                  <div className="AanvraagBox">
                    <h3>A. Awan</h3>
                    <img src={nodePreview} alt="icon" />
                  </div>
                  
                      <table>
                        <tbody>
                          <tr>
                            <td>Datum Aanvraag</td>
                            <td>11-06-2020</td>
                          </tr>
                          <tr>
                            <td>Datum Goedkeuring</td>
                            <td>11-06-2020</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </a>


            <a href="/Concernschema">
              <div className="Aanvraag">
                  <div className="AanvraagBox">
                    <h3>A. Awan</h3>
                    <img src={nodePreview} alt="icon" />
                  </div>
                  
                      <table>
                        <tbody>
                          <tr>
                            <td>Datum Aanvraag</td>
                            <td>11-06-2020</td>
                          </tr>
                          <tr>
                            <td>Datum Goedkeuring</td>
                            <td>11-06-2020</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </a>


            <a href="/Concernschema">
              <div className="Aanvraag">
                  <div className="AanvraagBox">
                    <h3>A. Awan</h3>
                    <img src={nodePreview} alt="icon" />
                  </div>
                  
                      <table>
                        <tbody>
                          <tr>
                            <td>Datum Aanvraag</td>
                            <td>11-06-2020</td>
                          </tr>
                          <tr>
                            <td>Datum Goedkeuring</td>
                            <td>11-06-2020</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </a>

        </section>
        
    </section>

    <section className="AanvraagInBehandeling">
      <span className="underline">
        <h2>Aanvragen in behandeling</h2>
      </span>

      <section className="AanvraagContainer">

      <a href="/Concernschema">
          <div className="Aanvraag">
              <div className="AanvraagBox">
                <h3>A. Awan</h3>

                <table>
                    <tbody>
                      <tr>
                        <td>Datum Aanvraag</td>
                        <td>11-06-2020</td>
                      </tr>
                    </tbody>
                  </table>
              
              </div>
          </div>
        </a>

        <a href="/Concernschema">
          <div className="Aanvraag">
              <div className="AanvraagBox">
                <h3>A. Awan</h3>

                <table>
                    <tbody>
                      <tr>
                        <td>Datum Aanvraag</td>
                        <td>11-06-2020</td>
                      </tr>
                    </tbody>
                  </table>
              
              </div>
          </div>
        </a>

        <a href="/Concernschema">
          <div className="Aanvraag">
              <div className="AanvraagBox">
                <h3>A. Awan</h3>

                <table>
                    <tbody>
                      <tr>
                        <td>Datum Aanvraag</td>
                        <td>11-06-2020</td>
                      </tr>
                    </tbody>
                  </table>
              
              </div>
          </div>
        </a>
      
    </section>

    </section>

  </section>


  </section>

  

  );
}

export default Userportal;