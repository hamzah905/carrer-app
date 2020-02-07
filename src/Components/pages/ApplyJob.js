import React from 'react';
import axios from 'axios';
import { Form, Row, Col, Input, Button } from 'antd';
import Avatar from './UploadButton';
import Logo from "../.././Logo.png";

class ApplyJobForm extends React.Component {
  
  state = {
    user: {
      first_name: '',
      last_name: '',
      email: '',
      contact_no: '',
      address: '',
    }
  }

  handleChange = event => {
    this.setState({
      first_name: event.target.value,
      last_name: event.target.value,
      email: event.target.value,
      contact_no: event.target.value,
      address: event.target.value,
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
    // const user = {
    //   name: this.state.name
    // };

    // axios.post(`http://shoppify-career.herokuapp.com/jobs/1/apply?url=messanger-store.myshopify.com`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
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
            {getFieldDecorator(`first-name}`, {
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
            {getFieldDecorator(`last-name}`, {
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
            {getFieldDecorator(`email}`, {
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
            {getFieldDecorator(`contact-no}`, {
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
            {getFieldDecorator(`requirnment}`, {
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
            {getFieldDecorator(`address}`, {
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
            {getFieldDecorator(`cv}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Avatar />)}
          </Form.Item>
        </Col>
      <Col span={12} key= 'cover-letter'>
      <Form.Item
      name={`CoverLetter`}
      label={`CoverLetter`}
      >
            {getFieldDecorator(`cover-letter}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Avatar />)}
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
          <Button type="primary" htmlType="submit" style={{marginRight: '46%'}}>
            SUBMIT
          </Button>
        </Col>
      </Row>
    </Form>
  )};
};

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(ApplyJobForm);

export default WrappedAdvancedSearchForm;