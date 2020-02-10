import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Form, Row, Col, Input, Button } from 'antd';
// import Avatar from './UploadButton';
import Logo from "../.././Logo.png";

class ApplyJobForm extends React.Component {
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
      const user = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        contact_no: values.contact_no,
        address: values.address,
        resume: values.cv,
        cover_letter: values.cover_letter,
      };
      debugger
      console.log('Received values of user: ', user);
      axios.post(`https://shoppify-career.herokuapp.com/jobs/${parseInt(this.props.match.params.job_id)
    }/apply?url=messanger-store.myshopify.com`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    
  return (
    <Form
      name="advanced_search"
      className="ant-advanced-search-form"
      onSubmit={this.handleSubmit}
    >
    <div className='logo-with-title'>
      <img src={Logo} className="App-logo" alt="logo" />
      <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>APPLY JOB</h2>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
      <Row gutter={24}>
      <Col span={12} key= 'first-name'>
      <Form.Item
      name={`FirstName`}
      label={`First Name`}
      >
            {getFieldDecorator(`first_name`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="Tom" />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'last-name'>
      <Form.Item
      name={`LastName`}
      label={`Last Name`}
      >
            {getFieldDecorator(`last_name`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="Cruse" />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'email'>
      <Form.Item
      name={`Email`}
      label={`Email`}
      >
            {getFieldDecorator(`email`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="example@example.com" />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'contact-no'>
      <Form.Item
      name={`ContactNo`}
      label={`Contact No`}
      >
            {getFieldDecorator(`contact_no`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="12345678" />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'requirnment'>
      <Form.Item
      name={`Requirnment`}
      label={`Requirnment`}
      >
            {getFieldDecorator(`requirnment`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'address'>
      <Form.Item
      name={`Address`}
      label={`Address`}
      >
            {getFieldDecorator(`address`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'cv'>
      <Form.Item
      name={`CV`}
      label={`CV`}
      >
            {getFieldDecorator(`cv`, {
              rules: [
                {
                  // required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input type="file"  style={{ minHeight: '36px' }} />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'cover_letter'>
      <Form.Item
      name={`CoverLetter`}
      label={`CoverLetter`}
      >
            {getFieldDecorator(`cover_letter`, {
              rules: [
                {
                  // required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input type="file"  style={{ minHeight: '36px' }} />)}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary  primary-btnn" htmlType="submit" style={{marginRight: '46%'}}>
            APPLY
          </Button>
        </Col>
      </Row>
    </Form>
  )};
};

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(ApplyJobForm);

export default withRouter(WrappedAdvancedSearchForm);