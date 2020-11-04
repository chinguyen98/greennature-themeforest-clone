import React from 'react';
import ExOneComponent from './components/ExOneComponent';
import ExThreeComponent from './components/ExThreeComponent';
import ExTwoComponent from './components/ExTwoComponent';
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
      <ExTwoComponent />
      <ExThreeComponent />
    </div>
  );
}

export default App;
