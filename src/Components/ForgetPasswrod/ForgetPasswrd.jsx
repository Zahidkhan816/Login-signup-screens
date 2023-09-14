import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import LoginHero from '../Assets/Login.png';
import googlelogo from '../Assets/Google.png';
import logo from '../Assets/logo.png';
import 'forgetPassword.css'
import 'forgetPassword.css'
import './forgetPassword.css'
const LoginScreen = () => {
  return (
    <div className="login-container">
      <Row gutter={32}>
        {/* Image Side */}
        <Col xs={24} sm={12} className="image-col">
          <div className="image-container">
            <img src={LoginHero} alt="Login Image" />
          </div>
        </Col>
        {/* Login Form Side */}
        <Col xs={24} sm={12}>
          <div className="login-form-container">
            <div className="logo-container">
              <img src={logo} alt="" />
            </div>
            <div className="center-content">
              <h3>Forgot Password</h3>
              <p>Enter the email address you used when ..</p>
            </div>
            <Form name="login-form" initialValues={{ remember: true }}>
              <label htmlFor="useName">Email</label>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Your username/email. . .' }]}
              >
                <Input placeholder="Your email. . ." className="login-form-item" />
              </Form.Item>
             
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-button">
                  <span className="button-text">Send Reset Instuctions</span>
                </Button>
              </Form.Item>
              <p style={{ textAlign: "center" }}>
              Back to log in page?
                <span> <a href="">Back now</a></span>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;