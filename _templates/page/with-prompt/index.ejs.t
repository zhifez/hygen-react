---
to: src/pages/<%= Name || 'NewPage' %>.js
---
import React from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

export default function <%= Name || 'NewPage' %> () {
  return (
    <>
      <Header />
      <Container className="pt-3 pb-3">
        <h1><%= title || Name || 'NewPage' %></h1>
        <% if ( description ) { %>
        <p><%= description %></p>
        <% } %>
      </Container>
    </>
  );
}