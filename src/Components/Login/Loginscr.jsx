import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import LoginHero from '../Login/Assets/Login.png';
import googlelogo from '../Login/Assets/Google.png';
import logo from '../Login/Assets/logo.png';
import './Login.css'
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
              <h3>Welcome Back!</h3>
              <p>Welcome back, please enter your details.</p>
            </div>
            <Button type="primary" htmlType="submit" className="google-button">
              <div className="button-content">
                <img src={googlelogo} alt="" className="google-logo" />
                <span className="button-text">Login with Google</span>
              </div>
            </Button>

            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-text">Or</div>
              <div className="divider-line"></div>
            </div>

            <Form name="login-form" initialValues={{ remember: true }}>
              <label htmlFor="useName">Username / email</label>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Your username/email. . .' }]}
              >
                <Input placeholder="Your username/email." className="login-form-item" />
              </Form.Item>
              <label htmlFor="useName" style={{ display: 'flex', justifyContent: 'space-between' }}>
                Username / email
                <span className="forgot-password">
                  <a href="">Forget Password</a>
                </span>
              </label>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Your password. . ." className="login-form-item" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-button">
                  <span className="button-text">Log in</span>
                </Button>
              </Form.Item>
              <p style={{ textAlign: "center" }}>
                Don’t have an account?
                <span> <a href="">Register now</a></span>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;