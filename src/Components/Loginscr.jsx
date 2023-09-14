import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import LoginHero from '../Assets/Login.png';
import googlelogo from '../Assets/Google.png';

const LoginScreen = () => {
  return (
    <div className="login-container">
      <Row gutter={16}>
        {/* Image Side */}
        {/* imgs colms  */}
        <Col xs={24} sm={12}>
          <div className="image-container">
            <img src={LoginHero} alt="Login Image" />
          </div>
        </Col>
        {/* Login Form Side */}
        <Col xs={24} sm={12}>
          <div className="login-form-container">
            <div className="center-content">
              <h3>Welcome Back!</h3>
              <p>Welcome back, please enter your details.</p>
            </div>
            <Button type="primary" htmlType="submit" className="google-button">
              <div className="button-content">
                <img src={googlelogo} alt="" srcSet="" className="google-logo" />
                <span className="button-text">Login with Google</span>
              </div>
            </Button>
            <hr />
            Or
            <Form name="login-form" initialValues={{ remember: true }}>
              <label htmlFor="useName">Username / email</label>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Username" className="login-form-item" />
              </Form.Item>
              <label htmlFor="useName">
                Password
                <span className="forgot-password">Forget Password</span>
              </label>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" className="login-form-item" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-button">
                  <span className="button-text">Log in</span>
                </Button>
              </Form.Item>
              <p>
                Don’t have an account?
                <span>Register now</span>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;
