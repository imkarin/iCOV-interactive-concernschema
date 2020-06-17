import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Concernschema from '../Concernschema/Concernschema';
import Loginpage from '../Loginpage/Loginpage';
import Userportal from '../Userportal/Userportal';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={ Loginpage } />
          <Route path="/iCOV-interactive-concernschema" component={ Loginpage } />
          <Route path="/userportal" component={ Userportal } />
          <Route path="/concernschema" component={ Concernschema } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
