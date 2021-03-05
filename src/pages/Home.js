import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import TemplateCard from '../components/TemplateCard';

export default function Home () {
  return (
    <>
      <Header />
      <Container className="pt-3 pb-3">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sine.</p>
        <Row>
          <Col xs={6} md={3}>
            <TemplateCard />
          </Col>
          <Col xs={6} md={3}>
            <TemplateCard />
          </Col>
          <Col xs={6} md={3}>
            <TemplateCard />
          </Col>
          <Col xs={6} md={3}>
            <TemplateCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}