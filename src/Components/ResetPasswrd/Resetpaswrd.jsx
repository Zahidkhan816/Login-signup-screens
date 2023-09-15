import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import LoginHero from '../ResetPasswrd/Assets/Login.png';
import Logo from '../ResetPasswrd/Assets/logo.png';
import './Resetpassword.css';

const ResetPassword = () => {
  return (
    <div className="reset-password-container">
      <Row gutter={32}>
        {/* Image Side */}
        <Col xs={24} sm={12} className="reset-image-col">
          <div className="reset-image-container">
            <img src={LoginHero} alt="Login Image" />
          </div>
        </Col>
        {/* Reset Form Side */}
        <Col xs={24} sm={12}>
          <div className="reset-form-container">
            <div className="reset-logo-container">
              <img src={Logo} alt="" />
            </div>
            <div className="reset-center-content">
              <h3>Reset Password</h3>
            </div>
            <Form name="reset-form" initialValues={{ remember: true }}>
              <label htmlFor="new-password">New Password</label>
              <Form.Item
                name="new-password"
                rules={[{ required: true, message: 'Please enter your new password.' }]}
              >
                <Input.Password placeholder="Your new password" className="reset-form-item" />
              </Form.Item>
              <label htmlFor="confirm-password">Confirm Password</label>
              <Form.Item
                name="confirm-password"
                rules={[{ required: true, message: 'Please confirm your new password.' }]}
              >
                <Input.Password placeholder="Confirm your new password" className="reset-form-item" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="reset-button">
                  <span className="reset-button-text">Reset Password</span>
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

export default ResetPassword;
