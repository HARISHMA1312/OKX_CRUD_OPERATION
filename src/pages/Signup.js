import React from 'react';
import Navv from './Navv';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import BlackCol from './BlackCol';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Signup() {

  const postValue = (values) => {
    axios.post('https://666fc1d20900b5f87248205c.mockapi.io/SignUp', {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
    alert(values.email);
    console.log(values.email);
    console.log(values.password);
    console.log(values.confirmPassword);
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter.')
      .matches(/\d/, 'Password must contain at least one number.')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    agreed: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required('Required'),
  });

  return (
    <div className='signup-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col className='blk-col' xs={12} md={6}>
            <BlackCol />
          </Col>
          <Col className='white-col' xs={12} md={6}>
            <div className='signup-container'>
              <h2>Let's get you started</h2>
              <Formik
                initialValues={{ email: '', password: '', confirmPassword: '', agreed: false }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                  postValue(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, handleChange, values }) => (
                  <Form>
                    <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Field
                        className='form-control'
                        type="email"
                        name="email"
                        placeholder="Enter email"
                      />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </Form.Group>

                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Password</Form.Label>
                          <Field
                            className='form-control'
                            type="password"
                            name="password"
                            placeholder="Enter password"
                          />
                          <ErrorMessage name="password" component="div" className="error-message" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Confirm Password</Form.Label>
                          <Field
                            className='form-control'
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                          />
                          <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className='mb-3' controlId="formBasicCheckbox">
                      <Field
                        type="checkbox"
                        name="agreed"
                        checked={values.agreed}
                        onChange={handleChange}
                      />
                      <span style={{ color: 'grey' }}>
                        By creating an account, I agree to{' '}
                        <u onClick={() => window.location.href = '/terms-and-conditions'}>
                          OKX Terms of Service, Risk and Compliance, and privacy policy statements
                        </u>
                      </span>
                      <ErrorMessage name="agreed" component="div" className="error-message" />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className='w-100 signup-btn'
                      disabled={isSubmitting || !values.agreed}
                      style={{ backgroundColor: values.agreed ? 'blue' : 'grey', borderColor: values.agreed ? 'blue' : 'grey' }}
                    >
                      Next
                    </Button>
                  </Form>
                )}
              </Formik>
              <p className='text-center dont-have-account'>
                Have an account? <span className='signup-link' onClick={() => window.location.href = '/login'}>Login</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
