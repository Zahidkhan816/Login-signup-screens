import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import LoginHero from '../Register/Assets/Login.png';
import googlelogo from '../Register/Assets/Google.png';
import logo from '../Register/Assets/logo.png';
import './Register.css';
const Register = () => {
    // Define the onFinish function to handle form submission
    const onFinish = (values) => {
        console.log('Received values:', values);
        // You can perform further actions with the submitted values here, e.g., make an API request for authentication
    };

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
                            <p>Register now and start your adventure.</p>
                        </div>
                        <Button type="primary" htmlType="submit" className="google-button">
                            <div className="button-content">
                                <img src={googlelogo} alt="" className="google-logo" />
                                <span className="button-text">Register with Google</span>
                            </div>
                        </Button>

                        <div className="divider">
                            <div className="divider-line"></div>
                            <div className="divider-text">Or</div>
                            <div className="divider-line"></div>
                        </div>

                        <Form
                            name="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <label htmlFor="name">Name</label>
                                    <Form.Item
                                        name="name"
                                        rules={[{ required: true, message: 'Please enter your name.' }]}
                                    >
                                        <Input placeholder="Your name" className="login-form-item-small" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <label htmlFor="username">User Name</label>
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please enter your username.' }]}
                                    >
                                        <Input placeholder="Your username" className="login-form-item-small" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <label htmlFor="email">Email</label>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please enter your email.' }]}
                            >
                                <Input placeholder="Your email" className="login-form-item" />
                            </Form.Item>
                            <label htmlFor="password">Password</label>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password.' }]}
                            >
                                <Input.Password placeholder="Your password" className="login-form-item" />
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                className="checkbox-item"
                            >
                                <div className="checkbox-container">
                                    <Checkbox className="checkbox">
                                        <span className="checkbox-label">I agree to all the</span>
                                        <a href="#" className="policy-link"> Terms</a> & <a href="#" className="policy-link"> Privacy Policy</a>
                                    </Checkbox>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-button">
                                    <span className="button-text">Register    </span>
                                </Button>
                            </Form.Item>
                            <p style={{ textAlign: "center" }}>
                                Already  have an account?
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
