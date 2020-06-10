import React, { Component } from 'react';
import './Datasection.css';
import { loadData } from '../../assets/scripts/loadData';
import { updateData } from '../../assets/scripts/updateData';

import  DataTab from './DataTab';

class Datasection extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  /* Update data with applied filters */
  componentDidUpdate() {
    updateData(this);
  }

  /* Load initial data (no filters applied) */
  componentDidMount() {
    loadData(this);
  }

  render() {
    return (
      <div className="Datasection" ref={ this.myRef }>     
          <DataTab/> 
      </div>
     
    );
  }
  
}

export default Datasection;
