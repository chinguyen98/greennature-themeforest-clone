import React from 'react';
import ExOneComponent from './components/ExOneComponent';
import HeaderNavbar from './components/HeaderNavbar';
import IntroCarosel from './components/IntroCarousel';
import SocialArea from './components/SocialArea';

function App() {
  return (
    <div className="App">
      <SocialArea />
      <HeaderNavbar />
      <IntroCarosel />
      <ExOneComponent />
    </div>
  );
}

export default App;
