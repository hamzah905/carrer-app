import React from "react";

import { Row, Col, Button, Descriptions } from 'antd';
import Logo from "../.././Logo.png";

const JobDetail = () => {
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
    <Descriptions>
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
      <br></br>
      <Descriptions.Item label="Description">
      <div style={{ padding: 24, background: '#fff', minHeight: 360, textAlign: 'justify' }}>Bill is a cat. Part of learning, especially in software, is trying things. Sometimes those things work out for the best, sometimes is only by making mistakes that you learn what the “correct way” is. Stated differently, unless you are a literal genius, your first React project is going to have a few gnarly mistakes. This is normal.Part of learning, especially in software, is trying things. Sometimes those things work out for the best, sometimes is only by making mistakes that you learn what the “correct way” is. Stated differently, unless you are a literal genius, your first React project is going to have a few gnarly mistakes. This is normal.Part of learning, especially in software, is trying things. Sometimes those things work out for the best, sometimes is only by making mistakes that you learn what the “correct way” is. Stated differently, unless you are a literal genius, your first React project is going to have a few gnarly mistakes. This is normal.Part of learning, especially in software, is trying things. Sometimes those things work out for the best, sometimes is only by making mistakes that you learn what the “correct way” is. Stated differently, unless you are a literal genius, your first React project is going to have a few gnarly mistakes. This is normal.Part of learning, especially in software, is trying things. Sometimes those things work out for the best, sometimes is only by making mistakes that you learn what the “correct way” is. Stated differently, unless you are a literal genius, your first React project is going to have a few gnarly mistakes. This is normal.Part of learning, especially in software, is trying things. Sometimes those things work out for the best, sometimes is only by making mistakes that you learn what the “correct way” is. Stated differently, unless you are a literal genius, your first React project is going to have a few gnarly mistakes. This is normal.</div>
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
            APPLY
          </Button>
        </Col>
      </Row>
    </div>
);
}

export default JobDetail;