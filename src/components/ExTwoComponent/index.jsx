import React from 'react';
import { Button, Col, Row } from 'reactstrap';

import './ex-two.scss';
import donation_gb from '../../assets/images/donation-bg.jpg';
import donation1_gb from '../../assets/images/donation-bg-1.jpg';
import donation2_gb from '../../assets/images/donation-bg-2.jpg';

const data = [
  {
    title: 'Make Donation',
    subtitle: 'Your money can cure this earth',
    content: 'We are a larhge froup of people who powered movement fighting for a green and peaceful future for your land, forest, ocenas, foods, climate and pass the green earth to our children. Each one of us can make small changes in our lives, but together we can change the world.',
    buttonContent: 'Donate now!',
    color: '#feca28',
    bgimage: donation1_gb,
  },
  {
    title: 'Stop Drilling, Need Action!',
    subtitle: 'Your voice does matter',
    content: 'The Obama administration just granted Shell’s final permit to drill in the Alaskan Arctic this summer despite overwhelming global public opposition and the obvious risks to Arctic communities, wildlife, and our climate. But this isn’t over. The President knows what’s at stake: his climate legacy.',
    buttonContent: 'Act now!',
    color: '#00d595',
    bgimage: donation2_gb,
  },
];

function ExTwoComponent() {
  const items = data.map(item => {
    return (
      <Col
        key={item.color}
        className="ex-two__item d-flex flex-column justify-content-center align-items-start mx-5 my-1"
        style={{ backgroundImage: `url(${item.bgimage})` }}
      >
        <h2 className="text-white">{item.title}</h2>
        <h5 className="text-white">{item.subtitle}</h5>
        <span className="my-2 text-white">{item.content}</span>
        <Button style={{ backgroundColor: item.color, color: "white" }}>{item.buttonContent}</Button>
      </Col>
    )
  });

  return (
    <Row className="ex-two px-2 py-3" style={{ backgroundImage: `url(${donation_gb})` }}>
      {items}
    </Row>
  )
}

export default ExTwoComponent;