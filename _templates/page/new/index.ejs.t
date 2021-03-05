---
to: src/pages/<%= Name || 'NewPage' %>.js
arbitrary: <% title = null, desc = null %>
---
import React from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

export default function <%= Name || 'NewPage' %> () {
  return (
    <>
      <Header />
      <Container className="pt-3 pb-3">
        <h1><%= title || Name || 'New Page' %></h1>
        <p><%= desc || 'Lorem ipsum dolor sine.' %></p>
      </Container>
    </>
  );
}