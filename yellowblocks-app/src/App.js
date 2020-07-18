import React from 'react';
import Landing from './Containers/Landing/Landing.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import {CharityPage} from './CharityPage'

const App = () => (
  <div className="App">
    <Router>
    <Route exact path="/" component={Landing}/>
    <Route path="/redcross" component={CharityPage} />
    </Router>
    
  </div>
);

export default App;