import React from 'react';
import './Filtersection.css';

const Filtersection = (props) => {
  return (
    <div className="Filtersection">
      <h1>"User"</h1>
      <h3>"Afdeling"</h3>
      <h3>"Function"</h3>
          <br></br>
      <h2>Filter</h2>
          <br></br>



          <table>
<tbody>
<tr>
<td>Personen</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Vastgoed</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Niveau</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Relaties</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>


      <h2>Weergave</h2>
      <form>
        <label>
          <input type="checkbox" name="PERSON" value="PERSON" onChange={ (e) => props.update(e) } />
          Person <br />
        </label>
        <label>
          <input type="checkbox" name="ADDRESS" value="ADDRESS" onChange={ (e) => props.update(e) } />
          Address <br />
        </label>
        <label>
          <input type="checkbox" name="DEPARTMENT" value="DEPARTMENT" onChange={ (e) => props.update(e) } />
          Department <br />
        </label>
      </form>
    </div>
  );
}

export default Filtersection;
