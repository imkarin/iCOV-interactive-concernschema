import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Concernschema from '../Concernschema/Concernschema';
import Loginpage from '../Loginpage/Loginpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={ Loginpage } />
          <Route path="/iCOV-interactive-concernschema" component={ Loginpage } />
          <Route path="/login" component={ Loginpage } />
          <Route path="/concernschema" component={ Concernschema } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
