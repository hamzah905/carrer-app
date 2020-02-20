import React, { Component } from 'react';
import {
  Switch,
  Route, 
} from "react-router-dom";
import ContactUs from '../pages/ContactUs'
import Jobs from '../pages/Jobs'
import JobDetail from '../pages/JobDetail'
import ApplyJob from '../pages/ApplyJob'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Careers from '../pages/Careers'
import {  Layout, Breadcrumb } from 'antd';
import {baseURL} from "../.././utils";
import SideImage from "../.././careers-banner.png";
const { Content, Footer, Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <div>
            {
              this.props.image ?
                <img src={`${baseURL}${this.props.image}`} alt="logo"  style={{ width: '100%', marginTop: '100%' }} />
              :
                <img src={SideImage} alt="logo"  style={{ width: '100%', marginTop: '100%' }} />
            }
          </div>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Careers</Breadcrumb.Item>
            </Breadcrumb>
            <div className="custom-section">
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/careers" exact>
                  <Careers url_param = {this.props.url_param} />
                </Route>
                <Route path="/jobs/:job_id" exact>
                  <JobDetail url_param = {this.props.url_param} layout_color = {this.props.layout_color} />
                </Route>
                <Route path="/jobs" exact>
                  <Jobs url_param = {this.props.url_param} layout_color = {this.props.layout_color} />
                </Route>
                <Route path="/jobs/:job_id/apply" exact>
                  <ApplyJob
                   url_param = {this.props.url_param}
                   introductory_video = {this.props.introductory_video}
                   resume = {this.props.resume}
                   cover_letter = {this.props.cover_letter}
                   form_fields = {this.props.form_fields}
                   layout_color = {this.props.layout_color}  />
                </Route>
                <Route path="/blog" exact>
                  <Blog url_param = {this.props.url_param} layout_color = {this.props.layout_color} />
                </Route>
                <Route path="/contact_us" exact>
                  <ContactUs url_param = {this.props.url_param} layout_color = {this.props.layout_color} />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Sidebar;