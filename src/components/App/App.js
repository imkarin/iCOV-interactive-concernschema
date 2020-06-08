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
          <Route path="/" exact component={ Concernschema } />
          <Route path="/login" exact component={ Loginpage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
