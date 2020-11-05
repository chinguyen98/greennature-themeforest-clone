import React from 'react';
import ExFourComponent from './components/ExFourComponent';
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
      <ExFourComponent />
    </div>
  );
}

export default App;
