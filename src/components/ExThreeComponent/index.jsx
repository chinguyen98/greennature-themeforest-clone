import React from 'react';
import { CardImg, Col, Container, Row } from 'reactstrap';

import icon_5 from '../../assets/images/icon-5.png';
import './ex_three.scss';

function ExThreeComponent() {
  return (
    <div className="ex_three my-3">
      <Container>
        <Row className="ex_three__heading pb-2">
          <Col lg={6}>
            <Row className="d-flex align-items-center">
              <Col lg={2}>
                <CardImg src={icon_5} alt="icon_5" />
              </Col>
              <Col lg={10}>
                <span
                  style={{ fontSize: '1.5em' }}
                  className="font-weight-bolder text-right"
                >
                  Our Recent Projects
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-row justify-content-end align-self-center ex_three__more " lg={6}>
            <span className="text-success">More project</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ExThreeComponent;