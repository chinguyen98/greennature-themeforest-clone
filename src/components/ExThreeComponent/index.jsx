import React from 'react';
import { CardImg, Col, Container, Row } from 'reactstrap';

import icon_5 from '../../assets/images/icon-5.png';
import img_temp_1 from '../../assets/images/img_temp_1.jpg';
import slider_2 from '../../assets/images/slider-2.jpg';
import img_temp_2 from '../../assets/images/img_temp_2.jpg';
import slider_3 from '../../assets/images/slider-3.jpg';
import './ex_three.scss';

const data = [
  {
    img: img_temp_1,
    title: '',
    subtitle: '',
    content: '',
  },
  {
    img: slider_2,
    title: '',
    subtitle: '',
    content: '',
  },
  {
    img: img_temp_2,
    title: '',
    subtitle: '',
    content: '',
  },
  {
    img: slider_3,
    title: '',
    subtitle: '',
    content: '',
  },
];

const items = data.map(item => {
  return (
    <Col key={item.img} className="d-flex flex-column" lg={3}>
      <CardImg src={item.img} />
    </Col>
  )
})

function ExThreeComponent() {
  return (
    <div className="ex_three my-3">
      <Container>
        <Row className="ex_three__heading pb-2">
          <Col sm={6} lg={6} xs={12}>
            <Row className="d-flex align-items-center">
              <Col lg={2} sm={1} xs={2}>
                <CardImg src={icon_5} alt="icon_5" />
              </Col>
              <Col className="d-flex align-items-center" lg={10} sm={10} xs={10}>
                <span
                  style={{ fontSize: '1.5em' }}
                  className="font-weight-bolder text-right"
                >
                  Our Recent Projects
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-row justify-content-end align-self-center ex_three__more"xs={6} sm={6} lg={6}>
            <span className="text-success">More project</span>
          </Col>
        </Row>
        <Row className="mt-2">
          {items}
        </Row>
      </Container>
    </div>
  )
}

export default ExThreeComponent;