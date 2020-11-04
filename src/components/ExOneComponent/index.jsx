import React from 'react';
import { CardImg, Col, Row } from 'reactstrap';

import './ex-one.scss';
import icon_service_1 from '../../assets/images/icon-service-1.png';
import icon_service_2 from '../../assets/images/icon-service-2.png';
import icon_service_3 from '../../assets/images/icon-service-3.png';

const data = [
  {
    icon: icon_service_1,
    title: 'Save Our Forest',
    content: ' Ea consequat officia sit est minim amet cupidatat sit qui non officia. Culpa dolore et labore duis elit duis amet culpa cillum non fugiat incididunt enim ipsum.',
    link: '',
    color: '#865e36',
  },
  {
    icon: icon_service_2,
    title: 'Save Our Water',
    content: 'Esse ex nostrud excepteur officia officia duis exercitation qui officia id sint. Culpa sunt occaecat non nisi laborum. Exercitation duis aute velit amet Lorem voluptate labore qui commodo occaecat occaecat laboris dolore officia. Adipisicing esse ut sint in consectetur nostrud. Voluptate id irure eu labore.',
    link: '',
    color: '#7b6e51',
  },
  {
    icon: icon_service_3,
    title: 'Recycling Is A Must',
    content: ' Minim minim Lorem nulla ea occaecat officia laborum occaecat sit. Aliqua dolore dolor incididunt nisi ea. Do amet exercitation consectetur tempor qui incididunt est dolor aliqua magna. Et minim aliquip magna cillum minim in et ullamco laborum magna enim laboris.',
    link: '',
    color: '#865e36',
  },
]

function ExOneComponent() {
  const items = data.map(item => {
    return (
      <Col
        className="ex-one__child"
        key={item.title}
        style={{ backgroundColor: `${item.color}` }}
        lg="4" md="6" sm="12"
      >
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
          <Row>
            <div className="d-flex align-items-center justify-content-center">
              <CardImg className="mb-3" src={item.icon} alt={item.title} />
            </div>
          </Row>
          <h5 className="font-weight-bolder mb-3">{item.title}</h5>
          <p>{item.content}</p>
        </div>
      </Col>
    )
  });

  return (
    <Row className="ex-one">
      {items}
    </Row>
  )
}

export default ExOneComponent;