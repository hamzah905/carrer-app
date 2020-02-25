import React from "react";
import axios from 'axios';
import { Form, Row, Col, Input, Button, Spin} from 'antd';

import {
    Link, withRouter
  } from "react-router-dom";
// import queryString from 'query-string';

import Logo from "../.././Logo.png";
import {baseURL} from "../.././utils";

class Jobs extends React.Component {
    state = {
      jobs: [],
      loading: true,
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
            this.setState({loading: true})
            var new_values = {}
            Object.entries(values).map(([key, val]) => {
                new_values[key] = (val === undefined) ? "" : val;
            })
            axios.get(`${baseURL}/jobs/search_by_name?url=${this.props.url_param}&profession=${new_values.profession}&title=${new_values.title}&location=${new_values.location}`, values)
            .then(res => {
              var jobs = res.data.data;
              this.setState({ jobs, loading: false  });
            })
            .catch(error => {
                this.setState({ jobs: [], loading: false  });
            });
        });
    }
  
    componentDidMount() {
    //   this.setState({loading: true})
      axios.get(`${baseURL}/jobs?url=${this.props.url_param}`)
        .then(res => {
          var jobs = res.data.data;
          this.setState({ jobs, loading: false });
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
                            <Col span={6} key='title' className="ant-advanced-search-title" >
                                <Form.Item
                                    name={`Title`}
                                >
                                    {getFieldDecorator(`title`)(<Input placeholder="title" />)}
                                </Form.Item>
                            </Col>
                            <Col span={6} key='loacation' className="ant-advanced-search-location" >
                                <Form.Item
                                    name={`Location`}
                                >
                                    {getFieldDecorator(`location`)(<Input placeholder="location" />)}
                                </Form.Item>
                            </Col>
                            <Col span={6} key='profession' className="ant-advanced-search-profession" >
                                <Form.Item
                                    name={`Profession`}
                                >
                                    {getFieldDecorator(`profession`)(<Input placeholder="profession" />)}
                                </Form.Item>
                            </Col>
                            <Col
                                span={6}>
                                <div className="custom-bottom-btn" style={{margin: "5px 0px"}}>
                                    <Button type="primary primary-btnn" className="custom-apply-search-btn" htmlType="submit" style={{backgroundColor: this.props.layout_color}}>SEARCH</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
    <Spin tip="Loading..." className="spiner" spinning={this.state.loading}>
       { jobs.map((job, index)=>
        <div key = {index}>
            <div className="row">
                <div className="custom-detail-section">
                    <div className="custom-job-detail">
                        <h3 className="custom-job-heading"><Link to={`/jobs/${job.id}?url=${this.props.url_param}`}>{job.title}</Link></h3>
                        <p className="custom-job-location">{job.location}</p>
                        <p className="custom-job-desc">{job.description}</p>
                    </div>
                    <div className="custom-apply-btn">
                        <Button type="btn primary-btn" style={{backgroundColor: this.props.layout_color}} ><Link to={`/jobs/${job.id}?url=${this.props.url_param}`} >APPLY</Link></Button>
                    </div>
                </div>
            </div>
        </div>
       )}
       </Spin>
        </div>
    );
    }
}
const Jobz = Form.create({ name: 'advanced_search' })(Jobs);

export default withRouter(Jobz);