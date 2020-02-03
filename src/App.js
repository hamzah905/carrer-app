import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar/Sidebar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Sidebar />
        </div>
    </Router>
        
    );
  }
}

export default App;
