---
to: src/pages/<%= Name || 'NewPage' %>.js
arbitrary: <% title = null, desc = null %>
---
<% 
  PageName = ( Name ?? 'New Page' ),
  PageTitle = ( title ?? Name ?? 'New Page' ),
  PageDesc = ( desc ?? 'Lorem ipsum dolor sine.' ),
  CardName = ( Name ?? 'New' ) + 'Card'
%>import React from 'react';
import Header from '../components/Header';
<% if ( hasCard ) { %>
import { Container, Row, Col } from 'react-bootstrap';
import <%= CardName %> from '../components/<%= CardName %>';
<% } else { %>
import { Container } from 'react-bootstrap';
<% } %>
export default function <%= Name || 'NewPage' %> () {
  return (
    <>
      <Header />
      <Container className="pt-3 pb-3">
        <h1><%= PageTitle %></h1>
        <p><%= PageDesc %></p>
        <% if ( hasCard ) { %>
        <Row>
          <Col xs={<%= cardColumnMobile %>} md={<%= cardColumnWeb %>}>
            <<%= CardName %> />
          </Col>
          <Col xs={<%= cardColumnMobile %>} md={<%= cardColumnWeb %>}>
            <<%= CardName %> />
          </Col>
          <Col xs={<%= cardColumnMobile %>} md={<%= cardColumnWeb %>}>
            <<%= CardName %> />
          </Col>
          <Col xs={<%= cardColumnMobile %>} md={<%= cardColumnWeb %>}>
            <<%= CardName %> />
          </Col>
        </Row>
        <% } %>
      </Container>
    </>
  );
}