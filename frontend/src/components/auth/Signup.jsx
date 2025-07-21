import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SignupIllustration from '../../assets/images/auth/signup-illustration.svg';
import './Auth.scss';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Implement signup logic here
      console.log('Signup attempt', { name, email, password });
      setSuccess('Account created successfully! Please verify your email.');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  const socialLoginVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <div className="auth-wrapper">
      <Container className="auth-container">
        <Card className="auth-card shadow-lg">
          <Row className="g-0">
            <Col md={6} className="d-none d-md-flex illustration-container">
              <motion.img 
                src={SignupIllustration} 
                alt="Signup Illustration" 
                className="img-fluid"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col md={6}>
              <Card.Body className="p-5">
                <h2 className="text-center mb-4">Create Your Account</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter your full name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Create password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Confirm password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required 
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 mb-3">
                    <Button variant="primary" type="submit" size="lg">
                      Sign Up
                    </Button>
                  </div>

                  <div className="text-center mb-3">
                    <span className="text-muted">or sign up with</span>
                  </div>

                  <div className="social-login d-flex justify-content-center gap-3">
                    <motion.div 
                      variants={socialLoginVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button variant="outline-danger" className="social-btn">
                        <FaGoogle />
                      </Button>
                    </motion.div>
                    <motion.div 
                      variants={socialLoginVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button variant="outline-dark" className="social-btn">
                        <FaGithub />
                      </Button>
                    </motion.div>
                    <motion.div 
                      variants={socialLoginVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button variant="outline-primary" className="social-btn">
                        <FaFacebook />
                      </Button>
                    </motion.div>
                  </div>
                </Form>

                <div className="text-center mt-3">
                  <p>
                    Already have an account? <a href="/login">Log In</a>
                  </p>
                  <small className="text-muted">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </small>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
