import React from "react";
import axios from 'axios';
import {
    Link, withRouter
  } from "react-router-dom";

import { Row, Col, Button, Descriptions } from 'antd';
import Logo from "../.././Logo.png";
import {baseURL} from "../.././utils";

class JobDetail extends React.Component {
    
  state = {
    job: []
  }

  componentDidMount() {
    axios.get(`${baseURL}/jobs/${parseInt(this.props.match.params.job_id)}?url=messanger-store.myshopify.com`)
      .then(res => {
        var job = res.data.data;
        this.setState({ job });
      })
  }
  render() {

    var { job } = this.state;
    return(
      <div className="container">
        <div className="custom-header">
          <div className="custom-logo">
            <img src={Logo} className="App-logo" alt="logo" />
            <h2 className="page-title">JOB DETAIL</h2>
          </div>
        </div>
       
      <div className="custom-detail-heading">
        <h1>{job.title}</h1>
        </div>
        <div className="custom-detail-section custom-job-section">
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
    <div className="custom-job-description">{job.description}</div>
          </Descriptions.Item>
        </Descriptions>
        <Row>
            <Col span={24}>
              <div className="custom-bottom-btn">
              <Button type="primary  primary-btnn" htmlType="submit" className="apply-btn-job">
              <Link to={`/apply_job/${parseInt(this.props.match.params.job_id)}`} >APPLY JOB</Link>
              </Button>
              <Button type="primary  primary-btnn" htmlType="submit" className="apply-btn-linkedin">
              <Link to={`/apply_job/${parseInt(this.props.match.params.job_id)}`} >APPLY via LINKEDIN</Link>
              </Button>
              </div>
            </Col>
          </Row>
        </div>
        
        </div>
    );
  }
};


export default withRouter(JobDetail);