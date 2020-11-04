import React, { useState } from 'react';
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, CardImg } from 'reactstrap';

import slider_1 from '../../assets/images/slider-1.jpg';
import slider_2 from '../../assets/images/slider-2.jpg';
import slider_3 from '../../assets/images/slider-3.jpg';

const items = [
  {
    src: slider_1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: slider_2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: slider_3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

function IntroCarosel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <CardImg src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption}>{item.caption}</CarouselCaption>
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default IntroCarosel;