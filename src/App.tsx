import React, { FC, useEffect, useState } from 'react';
import Page from './Page';
import styled from 'styled-components';
import Header from './Header';
import Contact from './Contact';
import Facilities from './Facilities';
import Donate from './Donate';
import Credit from './Credit';
import './App.css';

const { PUBLIC_URL } = process.env;

const Slider = styled.div`
  overflow-y: scroll;
  -webkit-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
  block-size: 100%;
`;

const HeroHeading = styled.h1`
  color: #fff;
  font-family: 'Major Mono Display', monospace;
  font-size: 100px;
  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 650px) {
    font-size: 32px;
  }
`;

const App:FC = () => {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
   }
  useEffect(() => {
    window.addEventListener('resize', appHeight);

    return () => {
      window.removeEventListener('resize', appHeight);
    };
  });
  const [ language, setLanguage ] = useState(localStorage.getItem('language') || 'IS');
  return (
    <Slider>
      <Page image={`${PUBLIC_URL}/pool.jpeg`}>
        <Header language={language} setLanguage={setLanguage}/>
        <HeroHeading>Krossneslaug</HeroHeading>
        <Contact language={language} />
      </Page>
      <Page image={`${PUBLIC_URL}/raindrops.jpg`}>
        <Header language={language} setLanguage={setLanguage}/>
        <Facilities language={language} />
      </Page>
      <Page image={`${PUBLIC_URL}/driftwood.jpg`}>
        <Header language={language} setLanguage={setLanguage}/>
        <Donate language={language} />
      </Page>
      <Page image={`${PUBLIC_URL}/top_down_view.jpeg`}>
        <Header language={language} setLanguage={setLanguage}/>
        <Credit/>
      </Page>
    </Slider>
  );
}

export default App;
