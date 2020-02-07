import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import { Menu } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
			<Menu mode="horizontal">
      	<Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
      	<Menu.Item key="career">
          <Link to="/careers">Careers</Link>
        </Menu.Item>
        {/* <SubMenu title={<span>Jobs</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu> */}
      	<Menu.Item key="job">
          <Link to="/jobs">Jobs</Link>
        </Menu.Item>
      	<Menu.Item key="blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link to="/contact_us">Contact Us</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
