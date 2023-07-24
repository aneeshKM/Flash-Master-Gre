import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FlashSet from '../FlashSet/FlashSet';

const App: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <FlashSet/>
        </Col>
      </Row>
    </Container>
  );
};

export default App;