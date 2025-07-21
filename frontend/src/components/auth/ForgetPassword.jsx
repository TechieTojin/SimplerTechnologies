import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import './Auth.scss';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Implement forget password logic here
      console.log('Forget password request', { email });
      setSuccess('Password reset link sent to your email. Please check your inbox.');
    } catch (err) {
      setError('Failed to send password reset link. Please try again.');
    }
  };

  return (
    <div className="auth-wrapper">
      <Container className="auth-container">
        <Card className="auth-card shadow-lg">
          <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <Form.Text className="text-muted">
                  We'll send you a password reset link to your email.
                </Form.Text>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" size="lg">
                  Send Reset Link
                </Button>
              </div>
            </Form>

            <div className="text-center mt-3">
              <p>
                Remember your password? <a href="/login">Log In</a>
              </p>
              <p>
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ForgetPassword;
