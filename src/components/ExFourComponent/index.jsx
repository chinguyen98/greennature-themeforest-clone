import React from 'react';
import { CardImg, Col, Row } from 'reactstrap';

import './ex-four.scss';
import slider_1 from '../../assets/images/slider-1.jpg';
import icon_1 from '../../assets/images/icon-1.png';
import icon_2 from '../../assets/images/icon-2.png';
import icon_3 from '../../assets/images/icon-3.png';

const data = [
  {
    icon: icon_1,
    title: 'MOLLIS MATTIS',
    content: 'Proident labore officia dolor qui amet reprehenderit. Ullamco do labore amet velit. Enim cillum dolor sunt esse in deserunt non non velit reprehenderit eu do qui. Eiusmod mollit dolore aliquip aute ullamco tempor duis esse veniam nostrud pariatur ullamco aliqua. Enim aute quis nisi veniam tempor cupidatat sint aliquip cillum ipsum.',
  },
  {
    icon: icon_2,
    title: 'ULLAMCORPER MATTIS ETIAM',
    content: 'Irure qui consequat nulla ad sit nulla labore consectetur enim mollit. Ullamco tempor sint officia ut esse nisi esse labore tempor consequat culpa irure voluptate dolore. Fugiat aliqua laboris eiusmod non in ullamco elit incididunt amet consectetur sit. Quis reprehenderit irure sint nostrud. Anim dolore labore qui sit non exercitation est eiusmod esse cillum aute in cillum eiusmod.',
  },
  {
    icon: icon_3,
    title: 'MATTIS ETIAM JUSTO',
    content: 'Cillum eiusmod laborum occaecat exercitation consectetur irure irure excepteur ipsum. Amet proident nostrud dolor cupidatat sint. Reprehenderit velit laborum cupidatat Lorem nulla laboris aliquip do dolore dolor. Ea sit deserunt incididunt consequat aute. Dolore aute dolor laboris mollit duis nostrud nisi voluptate voluptate dolore sint dolore incididunt.',
  },
];

function ExFourComponent() {
  const items = data.map(item => {
    return (
      <Row key={item.title} className="ex-four__item my-3 px-2">
        <Col lg={1} xs={2}>
          <CardImg src={item.icon} />
        </Col>
        <Col lg={11} xs={10}>
          <h5>{item.title}</h5>
          <span className="ex-four__item__content">{item.content}</span>
        </Col>
      </Row>
    )
  })

  return (
    <Row className="ex-four">
      <Col lg={6} xs={12}>
        <CardImg
          src={slider_1}
          alt="slider"
          className="ex-four__image"
        />
      </Col>
      <Col
        className="py-1"
        lg={6} xs={12}
      >
        {items}
      </Col>
    </Row>
  )
}

export default ExFourComponent;