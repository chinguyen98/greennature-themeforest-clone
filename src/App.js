import React from 'react';
import ExOneComponent from './components/ExOneComponent';
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
    </div>
  );
}

export default App;
