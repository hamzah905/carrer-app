import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar/Sidebar.js'
import './App.css';
import axios from 'axios';
import { baseURL } from './utils';

// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    landing_page: "blogs",
    layout_color: "#000000",
    image: `${baseURL}/uploads/setting/image/1/careers-banner.png`,
    font_family: "Roboto",
    font_size: 5
  }

  componentDidMount() {
    axios.get(`${baseURL}/settings?url=messanger-store.myshopify.com`)
      .then(res => {
        var response = res.data.data;
        this.setState({ landing_page: response.landing_page,
        layout_color: response.layout_color,
        image: response.image,
        font_family: response.font_family,
        font_size: response.font_size });
      })
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
      <Router>
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
        <div style={{ fontFamily: `${context.state.font_family}` }}>
          <Navbar />
          <Sidebar image={context.state.image}/>
        </div>
            </React.Fragment>
          )}
        </MyContext.Consumer>
    </Router>
    </MyProvider>
    );
  }
}

export default App;
