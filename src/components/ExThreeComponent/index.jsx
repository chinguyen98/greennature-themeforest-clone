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
    title: 'wind energy',
    subtitle: 'enviroment, renewable energy',
    content: 'Cillum dolore dolore sunt culpa pariatur pariatur nisi laboris ea veniam amet reprehenderit commodo. Aliqua esse qui occaecat nisi Lorem qui ex consequat occaecat. Occaecat commodo consequat tempor mollit sit qui amet aliqua dolor in minim. Laborum quis id duis sunt fugiat ipsum culpa labore do dolor elit. Commodo tempor occaecat in adipisicing eiusmod. Amet ex nostrud anim eiusmod amet occaecat. Exercitation esse irure sunt esse veniam.',
  },
  {
    img: slider_2,
    title: 'elephant sanctuary',
    subtitle: 'african, animals',
    content: 'Adipisicing adipisicing ea dolor quis elit in ut voluptate culpa. Excepteur in do nulla qui esse ut aliqua consectetur. Nisi quis voluptate eu minim. Sunt ipsum mollit aliquip consectetur velit occaecat ullamco nostrud et sunt quis. Minim velit nulla ullamco nisi adipisicing sint ad. In eu exercitation officia adipisicing est ex et aliqua laborum anim cillum.',
  },
  {
    img: img_temp_2,
    title: 'conservation volunteer',
    subtitle: 'cleaning, volunteer',
    content: 'Ea adipisicing eu exercitation voluptate id culpa aliquip adipisicing laboris exercitation. Reprehenderit mollit veniam ea enim nisi. Id culpa ut ipsum mollit ullamco reprehenderit excepteur velit in adipisicing excepteur officia amet. Laborum pariatur duis occaecat magna. Sint ex cillum officia cillum cillum nisi occaecat excepteur. Esse proident elit mollit aliquip irure aliquip tempor et irure adipisicing aute.',
  },
  {
    img: slider_3,
    title: 'energy conservation',
    subtitle: 'animals, volunteer',
    content: 'Mollit dolore commodo deserunt ad est nostrud ad nisi proident sunt enim eu. Ex exercitation aliquip irure excepteur occaecat consectetur Lorem. Aute nostrud pariatur commodo amet laborum aute irure et quis cillum sunt nulla commodo.',
  },
];

function ExThreeComponent() {
  const items = data.map(item => {
    return (
      <Col
        key={item.img}
        className="ex_three__img-item d-flex my-2 flex-column justify-content-center align-items-lg-start align-items-center justify-content-lg-start"
        lg={3}
      >
        <CardImg className="ex_three__img-item__image" src={item.img} />
        <span className="ex_three__img-item__title">{item.title}</span>
        <span className="text-secondary">{item.subtitle}</span>
        <div className="ex_three__img-item__content">
          <p>{item.content}</p>
        </div>
      </Col>
    )
  })

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
                  className="font-weight-bolder text-lg-right"
                >
                  Our Recent Projects
                </span>
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex flex-row justify-content-lg-end justify-content-center align-self-center ex_three__more"
            xs={12} sm={12} lg={6}
          >
            <span className="text-success text-center">More project</span>
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