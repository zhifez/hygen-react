import React from 'react';
import Header from '../components/Header';
import { Container, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function Hello () {
  const onSubmit = ( values ) => {
    console.log ( values );
  }

  return (
    <>
      <Header />
      <Container className="pt-3 pb-3">
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sine.</p>
        <hr />
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={yup.object ().shape ( {
            username: yup.string ().required ( 'Name is required.' ),
            password: yup.string ().required ( 'Password is required.' ),
          } )}
          onSubmit={onSubmit}
        >
          {( {
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          } ) => (
            <Form onSubmit={handleSubmit}>
              <Form.Label>Username</Form.Label>
              <Form.Control 
                name={'username'} 
                placeholder={'Username'} 
                value={values[ 'username' ]}
                onChange={handleChange} 
                onBlur={handleBlur} 
                isInvalid={!!errors[ 'username' ]}
              />
              <Form.Control.Feedback type="invalid">
                {errors[ 'username' ]}
              </Form.Control.Feedback>
              <br />
              <Form.Label>Password</Form.Label>
              <Form.Control 
                name={'password'} 
                placeholder={'Password'} 
                value={values[ 'password' ]}
                onChange={handleChange} 
                onBlur={handleBlur}
                isInvalid={!!errors[ 'password' ]} 
              />
              <Form.Control.Feedback type="invalid">
                {errors[ 'password' ]}
              </Form.Control.Feedback>
              <br />
              <Button type={'submit'} variant={'primary'}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}