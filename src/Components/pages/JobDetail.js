import React from "react";
import axios from 'axios';
import {
    Link, withRouter
  } from "react-router-dom";

import { Row, Col, Button, Descriptions } from 'antd';
import Logo from "../.././Logo.png";

class JobDetail extends React.Component {
    
  state = {
    job: []
  }

  componentDidMount() {
    axios.get(`https://shoppify-career.herokuapp.com/jobs/${parseInt(this.props.match.params.job_id)}?url=messanger-store.myshopify.com`)
      .then(res => {
        var job = res.data.data;
        this.setState({ job });
      })
  }
  render() {

    var { job } = this.state;
    return(
        <div>
          <div className='logo-with-title'>
            <img src={Logo} className="App-logo" alt="logo" />
            <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>JOB DETAIL</h2>
          </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h1 style={{ textAlign: 'center', fontSize: "xx-large" }}>{job.title}</h1>
        <Descriptions>
          <Descriptions.Item label="No of Positions">{job.no_of_positions}</Descriptions.Item>
          <Descriptions.Item label="Experience Required">{job.experience}</Descriptions.Item>
          <Descriptions.Item label="Salary">{job.salary}</Descriptions.Item>
          <Descriptions.Item label="Skills Required">{job.skills}</Descriptions.Item>
          <Descriptions.Item label="Date Posted">
            {job.created_at}
          </Descriptions.Item>
          <br></br>
          <Descriptions.Item label="Description">
    <div style={{ padding: 24, background: '#fff', minHeight: 360, textAlign: 'justify' }}>{job.description}</div>
          </Descriptions.Item>
        </Descriptions>
        <Row>
            <Col
              span={24}
              style={{
                textAlign: 'right',
              }}
            >
              <Button type="primary  primary-btnn" htmlType="submit" style={{marginRight: '46%'}}>
              <Link to={`/apply_job/${parseInt(this.props.match.params.job_id)}`} >APPLY</Link>
              </Button>
            </Col>
          </Row>
        </div>
    );
  }
};


export default withRouter(JobDetail);