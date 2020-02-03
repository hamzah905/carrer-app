import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import ContactUs from '../pages/ContactUs'
import ApplyJob from '../pages/ApplyJob'
import JobDetail from '../pages/JobDetail'
import {  Layout, Breadcrumb } from 'antd';
import SideImage from "../.././careers-banner.png";
const { Content, Footer, Sider } = Layout;

// const Home = () => {
//   return(
//       <div>
//       <h2>Home Page:</h2>
//       <br></br>
//       <p>Welcome to Home page.</p>
//       </div>
//   );
//   }
  
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
            <img src={SideImage} alt="logo"  style={{ width: '100%', marginTop: '90%' }} />
          </div>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 470 }}>
              <Switch>
                {/* <Route path="/">
                  <Home />
                </Route> */}
                <Route path="/careers">
                  <JobDetail />
                </Route>
                <Route path="/jobs">
                  <ApplyJob />
                </Route>
                <Route path="/contact_us">
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