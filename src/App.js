import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { Spin } from "antd";
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
    url_param: "careers-app.myshopify.com",
    landing_page: "blogs",
    layout_color: "rgb(92, 106, 196)",
    image: `/uploads/setting/image/1/careers-banner.png`,
    font_family: "Roboto",
    font_size: 5,
    introductory_video: false,
    resume: true,
    cover_letter: false,
    form_fields: []
  }

  componentDidMount() {
    const urlParam = window.location.href.split("=")[1]

    axios.get(`${baseURL}/settings?url=${urlParam}`)
      .then(res => {
        var response = res.data.data;
        this.setState({ url_param: urlParam,
        landing_page: response.landing_page,
        layout_color: response.layout_color,
        image: response.image,
        font_family: response.font_family,
        font_size: response.font_size,
        introductory_video: response.introductory_video,
        resume: response.resume,
        cover_letter: response.cover_letter,
        form_fields: response.form_fields });
      })
      console.log(this.state)
      localStorage.setItem('url_param', urlParam);
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
  state = { loading: true };
  componentDidMount() {
    setTimeout(() => { 
          this.setState({loading: false})
    }, 500);
}

  render() {
    return (
      <MyProvider>
      <Router>
      <MyContext.Consumer>
        {
        (context) => (
          <React.Fragment>
          <Spin tip="Loading..." className="spiner" spinning={this.state.loading}>
            <div style={{ fontFamily: `${context.state.font_family}` }}>
              <Navbar url_param = {context.state.url_param} />
              <Sidebar 
              image={context.state.image} 
              layout_color={context.state.layout_color} 
              url_param = {localStorage.getItem('url_param')}
              introductory_video = {context.state.introductory_video}
              resume = {context.state.resume}
              cover_letter = {context.state.cover_letter}
              form_fields = {context.state.form_fields}
              />
            </div>
          </Spin>
            </React.Fragment>
          )}
        </MyContext.Consumer>
    </Router>
    </MyProvider>
    );
  }
}

export default App;
