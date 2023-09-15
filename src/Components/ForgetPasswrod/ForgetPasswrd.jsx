import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import LoginHero from '../ForgetPasswrod/Assets/Login.png';
import logo from '../ForgetPasswrod/Assets/logo.png';
import './forgetPassword.css';

const ForgetPassword = () => {
  return (
    <div className="forget-password-container">
      <Row gutter={32}>
        {/* Image Side */}
        <Col xs={24} sm={12} className="image-col">
          <div className="image-container">
            <img src={LoginHero} alt="Login Image" />
          </div>
        </Col>
        {/* Login Form Side */}
        <Col xs={24} sm={12}>
          <div className="form-container">
            <div className="logo-container">
              <img src={logo} alt="Logo" />
            </div>
            <div className="center-content">
              <h3>Forgot Password</h3>
              <p>Enter the email address you used when signing up, and we'll send reset instructions to reset your password.</p>
            </div>
            <Form name="login-form" initialValues={{ remember: true }}>
              <label htmlFor="email">Email</label>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please enter your email.' }]}
              >
                <Input placeholder="Your email" className="login-input" />
              </Form.Item>
             
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-button">
                  <span className="button-text">Send Reset Instructions</span>
                </Button>
              </Form.Item>
              <p style={{ textAlign: "center" }}>
                Back to the login page?
                <span> <a href="/">Back now</a></span>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPassword;
