import React from 'react';
import HeaderNavbar from './components/HeaderNavbar';
import IntroCarosel from './components/IntroCarousel';
import SocialArea from './components/SocialArea';

function App() {
  return (
    <div className="App">
      <SocialArea />
      <HeaderNavbar />
      <IntroCarosel />
    </div>
  );
}

export default App;
