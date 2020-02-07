import React from "react";
import axios from 'axios';

import { Row, Col, Button, Descriptions } from 'antd';
import Logo from "../.././Logo.png";

class Blog extends React.Component {
    state = {
      blogs: []
    }
  
    componentDidMount() {
      axios.get(`https://shoppify-career.herokuapp.com/blogs?url=messanger-store.myshopify.com`)
        .then(res => {
          var blogs = res.data.data;
          this.setState({ blogs });
        })
    }

render() {
    var { blogs } = this.state;
    console.log(blogs);
    return(
        <div>
        <div className='logo-with-title'>
            <img src={Logo} className="App-logo" alt="logo" />
            <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>BLOGS</h2>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
       { blogs.map((blog, index)=>
        <div key = {index}>

            {
                index%2 ? 
                <Descriptions>
                    <Descriptions.Item>
                    <h2>{blog.title}</h2>
                    <div style={{ padding: 1, background: '#fff', minHeight: 160, textAlign: 'justify',  minWidth: 640 }}>{blog.description}</div>
                    </Descriptions.Item>
                    <Descriptions.Item>
                    <img 
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=150"
                    alt="new"
                    style={{ marginLeft: '185%' }}
                    />
                    </Descriptions.Item>
                </Descriptions>
                :
                <div>
                <Descriptions>
                    <Descriptions.Item>
                    <img 
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=150"
                    alt="new"
                    />
                    </Descriptions.Item>
                    <Descriptions.Item>
                    <h2>{blog.title}</h2>
                    <div style={{ padding: 1, background: '#fff', minHeight: 160, textAlign: 'justify' }}>{blog.description}</div>
                    </Descriptions.Item>
                </Descriptions>
                <br></br>
                <hr style={{ borderTop: '1px rgba(0, 0, 0, 0.1)' }}></hr>
                </div>
            }
        </div>
        )}
        
            
        <Row>
            <Col
            span={24}
            style={{
                textAlign: 'right',
                marginTop: '10%',
            }}
            >
            <Button type="primary  primary-btnn" htmlType="submit" style={{marginRight: '46%'}}>
                VIEW JOBS
            </Button>
            </Col>
        </Row>
        </div>
    );
    }
}

export default Blog;