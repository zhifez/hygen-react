import React from 'react';
import Header from '../components/Header';

import { Container, Row, Col } from 'react-bootstrap';
import HelloCard from '../components/HelloCard';

export default function Hello () {
  return (
    <>
      <Header />
      <Container className="pt-3 pb-3">
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sine</p>
        
        <Row>
          <Col xs={12} md={4}>
            <HelloCard />
          </Col>
          <Col xs={12} md={4}>
            <HelloCard />
          </Col>
          <Col xs={12} md={4}>
            <HelloCard />
          </Col>
          <Col xs={12} md={4}>
            <HelloCard />
          </Col>
        </Row>
        
      </Container>
    </>
  );
}