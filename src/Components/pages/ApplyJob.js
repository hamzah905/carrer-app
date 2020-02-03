import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import Avatar from './UploadButton';
import Logo from "../.././Logo.png";


const ApplyJobForm = () => {

  const getFields = () => {
    const children = [
        <Col span={12}>
          <Form.Item
            name={`FirstName`}
            label={`First Name`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`LastName`}
            label={`Last Name`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`Email`}
            label={`Email`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`Contact`}
            label={`Contact No`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`Requirnment`}
            label={`Requirnment`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`Address`}
            label={`Address`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`CV`}
            label={`CV`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
          <Avatar />
          </Form.Item>
        </Col>,
        <Col span={12}>
          <Form.Item
            name={`Cover Letter`}
            label={`Cover Letter`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
          <Avatar />
          </Form.Item>
        </Col>,
        
    ];

    return children;
  };

  const onSubmit = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="advanced_search"
      className="ant-advanced-search-form"
      onSubmit={onSubmit}
    >
    <div className='logo-with-title'>
      <img src={Logo} className="App-logo" alt="logo" />
      <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>APPLY JOB</h2>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
      <Row gutter={24}>{getFields()}</Row>
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
  );
};

export default ApplyJobForm;