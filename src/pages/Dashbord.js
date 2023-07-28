import React from 'react';
import Menu from '../components/Menu';
import { Row, Col } from 'reactstrap';

export default function Dashbord() {
  return (
    <>
      <Row>
        <Col className="bg-light border" xs="2">
          <Menu />
        </Col>
        <Col className="bg-light border">.col-6</Col>
      </Row>
    </>
  );
}
