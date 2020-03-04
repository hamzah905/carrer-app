import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <nav className="menuBar">
        	<div className="logo">
          		<Link to={`/jobs?url=${this.props.url_param}`}>Careers</Link>
        	</div>
        	<div className="menuCon">
        		<div className="leftMenu">
	        		<LeftMenu url_param={this.props.url_param} />
				    </div>
				    {/* <div className="rightMenu">
	        			<RightMenu />
				    </div> */}
				    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
				    <Drawer
		          title="Basic Drawer"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          <LeftMenu />
		          <RightMenu />
		        </Drawer>

        	</div>
        </nav>
    );
  }
}

export default Navbar;
