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
// import SideImage from "../.././careers-banner.png";
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
    debugger
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <div>
            <img src="https://storecareersapp.com/uploads/setting/image/1/careers-banner.png" alt="logo"  style={{ width: '100%', marginTop: '100%' }} />
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
                  <Careers />
                </Route>
                <Route path="/jobs/:job_id" exact>
                  <JobDetail />
                </Route>
                <Route path="/jobs" exact>
                  <Jobs />
                </Route>
                <Route path="/jobs/:job_id/apply" exact>
                  <ApplyJob />
                </Route>
                <Route path="/blog" exact>
                  <Blog />
                </Route>
                <Route path="/contact_us" exact>
                  <ContactUs />
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