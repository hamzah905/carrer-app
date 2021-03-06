import React from "react";
import { Form, Input, Button } from 'antd';
import Logo from "../.././Logo.png";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 9,
  },
};
const validatemessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!',
  },
};


class ContactUsForm extends React.Component {
  state = { loading: true };
  componentDidMount() {
    setTimeout(() => { 
          this.setState({loading: false})
    }, 500);
}

  render() {
  const onSubmit = values => {
    console.log(values);
    values.preventDefault();
  };

  return (
    <Form {...layout} name="nest-messages" onSubmit={onSubmit} validatemessages={validatemessages}>

    <div className="custom-header">
        <div className="custom-logo">   
            <img src={Logo} className="App-logo" alt="logo" />
                <h2 style={{marginLeft: '1%', paddingTop: '4px'}}>CONTACT</h2>
        </div>
    </div>

    <br></br>
    <br></br>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Tom Cruse" />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input placeholder="example@example.com" />
      </Form.Item>
      <Form.Item name={['user', 'description']} label="Description">
        <Input.TextArea placeholder="Your Description" />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
        <Button type="primary  primary-btnn" htmlType="submit" style={{backgroundColor: this.props.layout_color}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
};

export default ContactUsForm;