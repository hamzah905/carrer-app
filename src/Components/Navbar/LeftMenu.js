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
			<Menu mode="horizontal" defaultSelectedKeys={"job"}>
      	{/* <Menu.Item key="home">
          <Link to={`/?url=${this.props.url_param}`}>Home</Link>
        </Menu.Item> */}
      	{/* <Menu.Item key="career">
          <Link to={`/careers?url=${this.props.url_param}`}>Careers</Link>
        </Menu.Item> */}
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
          <Link to={`/jobs?url=${this.props.url_param}`}>Jobs</Link>
        </Menu.Item>
      	<Menu.Item key="blog">
          <Link to={`/blog?url=${this.props.url_param}`}>Blog</Link>
        </Menu.Item>
        {/* <Menu.Item key="alipay">
          <Link to={`/contact_us?url=${this.props.url_param}`}>Contact Us</Link>
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default LeftMenu;
