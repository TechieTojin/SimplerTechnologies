import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LoginIllustration from '../../assets/images/auth/login-illustration.svg';
import './Auth.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Implement login logic here
      console.log('Login attempt', { email, password });
    } catch (err) {
      setError('Login failed. Please check your credentials.');
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
                src={LoginIllustration} 
                alt="Login Illustration" 
                className="img-fluid"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col md={6}>
              <Card.Body className="p-5">
                <h2 className="text-center mb-4">Welcome Back</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
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
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 mb-3">
                    <Button variant="primary" type="submit" size="lg">
                      Log In
                    </Button>
                  </div>

                  <div className="text-center mb-3">
                    <span className="text-muted">or continue with</span>
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
                  <a href="/forget-password" className="text-muted">Forgot Password?</a>
                  <p className="mt-2">
                    Don't have an account? <a href="/signup">Sign Up</a>
                  </p>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
