import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import LoginHero from '../Register/Assets/Login.png';
import GoogleLogo from '../Register/Assets/Google.png';
import Logo from '../Register/Assets/logo.png';
import './Register.css';

const Register = () => {
  // Define the onFinish function to handle form submission
  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can perform further actions with the submitted values here, e.g., make an API request for authentication
  };

  return (
    <div className="register-container">
      <Row gutter={32}>
        {/* Image Side */}
        <Col xs={24} sm={12} className="register-image-col">
          <div className="register-image-container">
            <img src={LoginHero} alt="Login Image" />
          </div>
        </Col>
        {/* Register Form Side */}
        <Col xs={24} sm={12}>
          <div className="register-form-container">
            <div className="register-logo-container">
              <img src={Logo} alt="" />
            </div>
            <div className="register-center-content">
              <h3>Welcome Back!</h3>
              <p>Register now and start your adventure.</p>
            </div>
            <Button type="primary" htmlType="submit" className="register-google-button">
              <div className="register-button-content">
                <img src={GoogleLogo} alt="" className="register-google-logo" />
                <span className="register-button-text">Register with Google</span>
              </div>
            </Button>

            <div className="register-divider">
              <div className="register-divider-line"></div>
              <div className="register-divider-text">Or</div>
              <div className="register-divider-line"></div>
            </div>

            <Form
              name="register-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <label htmlFor="register-name">Name</label>
                  <Form.Item
                    name="register-name"
                    rules={[{ required: true, message: 'Please enter your name.' }]}
                  >
                    <Input placeholder="Your name" className="register-form-item-small" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <label htmlFor="register-username">User Name</label>
                  <Form.Item
                    name="register-username"
                    rules={[{ required: true, message: 'Please enter your username.' }]}
                  >
                    <Input placeholder="Your username" className="register-form-item-small" />
                  </Form.Item>
                </Col>
              </Row>
              <label htmlFor="register-email">Email</label>
              <Form.Item
                name="register-email"
                rules={[{ required: true, message: 'Please enter your email.' }]}
              >
                <Input placeholder="Your email" className="register-form-item" />
              </Form.Item>
              <label htmlFor="register-password">Password</label>
              <Form.Item
                name="register-password"
                rules={[{ required: true, message: 'Please enter your password.' }]}
              >
                <Input.Password placeholder="Your password" className="register-form-item" />
              </Form.Item>
              <Form.Item
                name="register-remember"
                valuePropName="checked"
                className="register-checkbox-item"
              >
                <div className="register-checkbox-container">
                  <Checkbox className="register-checkbox">
                    <span className="register-checkbox-label">I agree to all the</span>
                    <a href="#" className="register-policy-link"> Terms</a> & <a href="#" className="register-policy-link"> Privacy Policy</a>
                  </Checkbox>
                </div>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="register-button">
                  <span className="register-button-text">Register</span>
                </Button>
              </Form.Item>
              <p style={{ textAlign: "center" }}>
                Already have an account?
                <span> <a href="">Login</a></span>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
