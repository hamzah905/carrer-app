import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { Form, Row, Col, Input, Button, message, Upload, Spin } from "antd";
import Logo from "../.././Logo.png";
// import LinkedinButton from "./LinkedinButton";
import {baseURL} from "../.././utils";


const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


class ApplyJobForm extends React.Component {
  state = { cvFile: null, coverLetterFile: null, videoFile: null, loading: false, job: [] };
  onSelectCvFile = file => {
    console.log(file,'cv file')
    this.setState({ cvFile: file });
  };
  onSelectCoverFile = file => {
    console.log(file,'cover letter file')
    this.setState({ coverLetterFile: file });
  };
  onSelectVideoFile = file => {
    console.log(file,'video file')
    this.setState({ videoFile: file });
  };
  componentDidMount() {
    axios.get(`${baseURL}/jobs/${parseInt(this.props.match.params.job_id)}?url=${this.props.url_param}`)
      .then(res => {
        var job = res.data.data;
        this.setState({ job });
      })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){      console.log("Received values of form: ", values);
      const user = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        contact_no: values.contact_no,
        address: values.address,
        linkedin_url: values.linkedin_url
      };
      const job_field = {}
      this.props.form_fields.map((field) =>
        job_field[field] = values[field]
      );
      const formData = new FormData();
      formData.append("resume", this.state.cvFile);
      formData.append("cover_letter", this.state.coverLetterFile);
      formData.append("video", this.state.videoFile);
      const params = {};
      Object.entries(user).forEach(([key, value]) => {
        params[`user[${key}]`] = value;
      });
      Object.entries(job_field).forEach(([key, value]) => {
        params[`job_field[${key}]`] = value;
      });
      this.setState({loading: true})
      axios
        .post(
          `${baseURL}/jobs/${parseInt(
            this.props.match.params.job_id
          )}/apply?url=${this.props.url_param}`,
          formData,
          { params },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ loading: false });
          this.props.history.push("/jobs");
          message.success("Job Applied Sucessfully", 2);  
        })
        .catch(error => {
            event.preventDefault();
            if (error.response.data.errors) {
              var hash = error.response.data.errors
              Object.keys(hash).forEach(function (key) { 
                message.error(key.replace('_', ' ') + " " + hash[key][0], 2);
              })
            }
            else if (error.response.data.message) {
              message.error(error.response.data.message, 2);
            }else {
              message.error('Something went wrong!');
            }
            this.setState({ loading: false  });
        });
      }
    });
  };
  
  render() {
    var { job } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { cvFile, coverLetterFile, videoFile } = this.state;
    console.log(this.props);
    return (
      <div className="container">

    <Spin tip="Loading..." className="spiner" spinning={this.state.loading}>
        <div className="custom-header">
          <div className="custom-logo">
            <img src={Logo} className="App-logo" alt="logo" />
            <h2>APPLY JOB</h2>
          </div>
        </div>
        <div className="apply-btn-linkedin-1">
          <Button type="primary primary-btnn" htmlType="submit" className="apply-btn-linkedin">APPLY via LINKEDIN
            {/* <Link to={`/jobs/${parseInt(this.props.match.params.job_id)}/apply`} >APPLY via LINKEDIN</Link> */}
          </Button>
          </div>
        <div className="custom-detail-section">
          <Form
            name="advanced_search"
            className="ant-advanced-search-form"
            onSubmit={this.handleSubmit}
          >
            <Row gutter={24}>
              <Col span={12} key="first-name">
                <Form.Item name={`FirstName`} label={`First Name`}>
                  {getFieldDecorator(`first_name`, {
                    rules: [
                      {
                        required: true,
                        message: "first name can't be blank!"
                      }
                    ]
                  })(<Input placeholder="Tom" />)}
                </Form.Item>
              </Col>
              <Col span={12} key="last-name">
                <Form.Item name={`LastName`} label={`Last Name`}>
                  {getFieldDecorator(`last_name`, {
                    rules: [
                      {
                        required: true,
                        message: "last name can't be blank!"
                      }
                    ]
                  })(<Input placeholder="Cruse" />)}
                </Form.Item>
              </Col>
              <Col span={12} key="email">
                <Form.Item name={`Email`} label={`Email`}>
                  {getFieldDecorator(`email`, {
                    rules: [
                      {
                        required: true,
                        message: "email can't be blank!"
                      }
                    ]
                  })(<Input placeholder="example@example.com" />)}
                </Form.Item>
              </Col>
              <Col span={12} key="contact-no">
                <Form.Item name={`ContactNo`} label={`Contact No`}>
                  {getFieldDecorator(`contact_no`, {
                    rules: [
                      {
                        required: true,
                        message: "contact number can't be blank!"
                      }
                    ]
                  })(<Input placeholder="12345678" />)}
                </Form.Item>
              </Col>
              <Col span={12} key="linkedin-url">
                <Form.Item name={`LinkedinUrl`} label={`Linkedin Url`}>
                  {getFieldDecorator(`linkedin_url`)(<Input placeholder="placeholder" />)}
                </Form.Item>
              </Col>
              <Col span={12} key="address">
                <Form.Item name={`Address`} label={`Address`}>
                  {getFieldDecorator(`address`)(<Input placeholder="placeholder" />)}
                </Form.Item>
              </Col>

            { this.props.form_fields.map((field)=>
              <Col span={12} key={`${field}`}>
                <Form.Item name={`${field}`} label={`${field}`}>
                  {getFieldDecorator(`${field}`)(<Input placeholder="placeholder" />)}
                </Form.Item>
              </Col>
            )}

              {this.props.resume ?
              <Col span={12} key="cv">
                <Form.Item name={`CV`} label={`CV`} required={true}>
                  {getFieldDecorator(`cv`, {
                    rules: [
                      {
                        required: true,
                        message: "Resume can't be blank!"
                      }
                    ]
                  })(
                    <Upload  {...props}
                      required={true}
                      fileList={cvFile ? [cvFile] : []}
                      beforeUpload={f => {
                        this.onSelectCvFile(f);
                        return false;
                      }}
                      showUploadList={{
                        showPreviewIcon: false,
                        showRemoveIcon: false
                      }}
                      accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    >
                      <Button
                        style={{ marginLeft: 10, color: 'grey', borderColor: 'grey' }}
                        type="default"
                        size="default"
                        ghost
                      >
                        {"Select File"}
                      </Button>
                    </Upload>
                  )}
                </Form.Item>
              </Col>
              :
              console.log("No Resume")
              }
              {this.props.cover_letter ?
              <Col span={12} key="cover_letter">
                <Form.Item name={`Cover Letter`} label={`Cover Letter`}>
                  {getFieldDecorator(`cover_letter`)(
                    <Upload  {...props}
                      fileList={coverLetterFile ? [coverLetterFile] : []}
                      beforeUpload={f => {
                        this.onSelectCoverFile(f);
                        return false;
                      }}
                      showUploadList={{
                        showPreviewIcon: false,
                        showRemoveIcon: false
                      }}
                      accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    >
                      <Button
                        style={{ marginLeft: 10, color: 'grey', borderColor: 'grey' }}
                        type="default"
                        size="default"
                        ghost
                      >
                        {"Select File"}
                      </Button>
                    </Upload>
                  )}
                </Form.Item>
              </Col>
              :
              console.log("No Cover Letter")
              }
              {this.props.introductory_video ?
              <Col span={12} key="video">
                <Form.Item name={`Video`} label={`Introductory Video`}>
                  {getFieldDecorator(`video`)(
                    <Upload  {...props}
                      fileList={videoFile ? [videoFile] : []}
                      beforeUpload={f => {
                        this.onSelectVideoFile(f);
                        return false;
                      }}
                      showUploadList={{
                        showPreviewIcon: false,
                        showRemoveIcon: false
                      }}
                      accept="video/*"
                    >
                      <Button
                        style={{ marginLeft: 10, color: 'grey', borderColor: 'grey' }}
                        type="default"
                        size="default"
                        ghost
                      >
                        {"Select File"}
                      </Button>
                    </Upload>

                    // <Upload {...props}
                    // // fileList={videoFile ? [videoFile] : []}
                    // beforeUpload={f => {
                    //   this.onSelectVideoFile(f);
                    // }}>
                    // <Button className="video-button-custom">
                    //   <Icon type="upload" /> Click to Upload
                    // </Button>
                    // </Upload>
                  )}
                </Form.Item>
              </Col>
              :
              console.log("No Video")
              }
            </Row>
            <Row>
              <Col span={24}>
                <div className="custom-bottom-btn">
                  <Button
                    type="primary primary-btnn"
                    className="apply-btn-job"
                    style={{backgroundColor: this.props.layout_color}}
                    htmlType="submit"
                  >
                    APPLY
                  </Button>
                  <Button type="primary primary-btnn" htmlType="submit" className="apply-btn-linkedin">
                    <a href={job.linkedin_job_url} >APPLY via LINKEDIN</a>
                    {/* <Link to={`/jobs/${parseInt(this.props.match.params.job_id)}/apply`} >APPLY via LINKEDIN</Link> */}
                  </Button>
                  <Button type="primary primary-btnn" htmlType="submit" className="apply-btn-back">
                    <Link to={`/jobs?url=${this.props.url_param}`} >CANCEL</Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        </Spin>
      </div>
    );
  }
}
const WrappedAdvancedSearchForm = Form.create({ name: "advanced_search" })(
  ApplyJobForm
);
export default withRouter(WrappedAdvancedSearchForm);