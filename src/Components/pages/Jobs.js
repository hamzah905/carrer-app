import React from "react";
import axios from 'axios';
import { Form, Row, Col, Input, Button} from 'antd';

import {
    Link
  } from "react-router-dom";
import Logo from "../.././Logo.png";

class Jobs extends React.Component {
    state = {
      jobs: []
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
            axios.get(`https://shoppify-career.herokuapp.com/jobs/search_by_profession?profession=${values.profession}&title=${values.title}&location=${values.location}`, values)
            .then(res => {
              var jobs = res.data.data;
              this.setState({ jobs });
            })
        });
    }
  
    componentDidMount() {
      axios.get(`https://storecareersapp.com/jobs?url=messanger-store.myshopify.com`)
        .then(res => {
          var jobs = res.data.data;
          this.setState({ jobs });
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        var { jobs } = this.state;
        console.log(jobs);
        return(
        <div className="container">
            <div className="custom-header">
                <div className="custom-logo">
                <img src={Logo} className="App-logo" alt="logo" />
                <h2 className="page-title">JOBS</h2>
                </div>
            </div>
            <div className="custom-detail-section">
                    <Form
                        name="advanced_search"
                        className="ant-advanced-search-form"
                        onSubmit={this.handleSubmit}>
                        <Row gutter={24}>
                            <Col span={6} key='title'>
                                <Form.Item
                                    name={`Title`}
                                >
                                    {getFieldDecorator(`title`)(<Input placeholder="title" />)}
                                </Form.Item>
                            </Col>
                            <Col span={6} key='loacation'>
                                <Form.Item
                                    name={`Location`}
                                >
                                    {getFieldDecorator(`location`)(<Input placeholder="location" />)}
                                </Form.Item>
                            </Col>
                            <Col span={6} key='profession'>
                                <Form.Item
                                    name={`Profession`}
                                >
                                    {getFieldDecorator(`profession`)(<Input placeholder="profession" />)}
                                </Form.Item>
                            </Col>
                            <Col
                                span={6}>
                                <div className="custom-bottom-btn" style={{margin: "5px 0px"}}>
                                    <Button type="primary primary-btnn" className="custom-apply-btn" htmlType="submit">Search</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>

       { jobs.map((job, index)=>
        <div key = {index}>
            <div className="row">
                <div className="custom-detail-section">
                    <div className="custom-job-detail">
                        <h3 className="custom-job-heading"><Link to={`/jobs/${job.id}`}>{job.title}</Link></h3>
                        <p className="custom-job-location">{job.description}</p>
                    </div>
                    <div className="custom-apply-btn">
                        <Button type="btn primary-btn" ><Link to={`/apply_job/${job.id}`} >APPLY</Link></Button>
                    </div>
                </div>
            </div>
        </div>
       )}
        </div>
    );
    }
}
const Jobz = Form.create({ name: 'advanced_search' })(Jobs);

export default Jobz;