import React from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

export default function Home () {
  return (
    <>
      <Header />
      <Container className="pt-3 pb-3">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sine.</p>
      </Container>
    </>
  );
}