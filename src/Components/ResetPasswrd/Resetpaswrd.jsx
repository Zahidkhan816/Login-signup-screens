import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import LoginHero from '../ResetPasswrd/Assets/Login.png';
import logo from '../ResetPasswrd/Assets/logo.png';
import './Resetpassword.css'
const Resetpaswrd = () => {
    return (
        <div className="login-container">
            <Row gutter={32}>
                <Col xs={24} sm={12} className="image-col">
                    <div className="image-container">
                        <img src={LoginHero} alt="Login Image" />
                    </div>
                </Col>
                <Col xs={24} sm={12}>
                    <div className="login-form-container">
                        <div className="logo-container">
                            <img src={logo} alt="" />
                        </div>
                        <div className="center-content">
                            <h3>Reset Password</h3>
                        </div>
                        <Form name="login-form" initialValues={{ remember: true }}>
                            <label htmlFor="password">New Password</label>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password.' }]}
                            >
                                <Input.Password placeholder="Your password. . ." className="login-form-item" />
                            </Form.Item>
                            <label htmlFor="password">Confirm Password</label>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password.' }]}
                            >
                                <Input.Password placeholder="Your password. . ." className="login-form-item" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-button">
                                    <span className="button-text">Reset Password</span>
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

export default Resetpaswrd;