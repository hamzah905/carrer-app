import React from "react";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";

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
    <div className="container">
        <div className="custom-header">
            <div className="custom-logo">   
                <img src={Logo} className="App-logo" alt="logo" />
                    <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>BLOGS</h2>
            </div>
        </div>

       { blogs.map((blog, index)=>
        <div key = {index} className="custom-detail-section custom-blog-section">

            {
                index%2 ? 
                <Descriptions>
                    <Descriptions.Item className="custom-blog-content-right">
                    <h2>{blog.title}</h2>
                    <div>{blog.description}</div>
                    </Descriptions.Item>
                    <Descriptions.Item className="custom-blog-img">
                    <img src={`https://shoppify-career.herokuapp.com/${blog.image}`} alt="new"/>
                    </Descriptions.Item>
                </Descriptions>
                :
                <Descriptions>
                    <Descriptions.Item className="custom-blog-img">
                    <img src={`https://shoppify-career.herokuapp.com/${blog.image}`} alt="new"/>
                    </Descriptions.Item>
                  
                    <Descriptions.Item className="custom-blog-content-left">
                    <h2>{blog.title}</h2>
                    <div>{blog.description}</div>
                    </Descriptions.Item>
                </Descriptions>
            }
        </div>
        )}
            
        <Row>
            <Col span={24}>
            <div className="custom-bottom-btn">
            <Button type="primary  primary-btnn" htmlType="submit" className="apply-btn-job">
                <Link to={`/jobs`} >VIEW JOBS</Link>
                 </Button>
            </div>
            
            </Col>
        </Row>
    </div>
    );
    }
}

export default withRouter(Blog);