import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './social-area.scss';

function SocialArea() {
  return (
    <Container className="social-area">
      <Row>
        <Col lg="7" sm="12">
          <Row>
            <Col lg="6" sm="12">
              <span className="mx-1">"Phone: +1800-222-3333"</span>
            </Col>
            <Col lg="6" sm="12">
              <span className="mx-1">"Email: contact@gmail.com"</span>
            </Col>
          </Row>
        </Col>
        <Col lg="5" sm="12" className="social-area__icon">
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
        </Col>
      </Row>
    </Container>
  )
}

export default SocialArea;