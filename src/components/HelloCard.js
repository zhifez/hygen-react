import React from 'react';
import { Card } from 'react-bootstrap';

export default function HelloCard ( {
  image = '/logo192.png',
  title = 'Title',
  description = 'Description'
} ) {
  return (
    <Card className={'mb-3'}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}