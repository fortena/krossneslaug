import React, { FC, useEffect } from 'react';
import HeroPage from './HeroPage';
import styled from 'styled-components';
import InfoPage from './InfoPage';
import HistoryPage from './HistoryPage';
import SocialLinks from './SocialLinks';
import QuickNav from './QuickNav';
import './App.css';

const Wrapper = styled.div`
  overflow: scroll;
  height: 100vh;
  height: var(--app-height);
  scroll-snap-points-y: repeat(--app-height);
  scroll-snap-type: y mandatory;
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

const ShortSection = styled.div`
  position: relative;
`;

const ShortSectionInner =styled.div`
  color: #fff;
  background-color: #222222;
  padding: 50px 80px;
  text-align: left;
  scroll-snap-align: start;
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
  return (
    <Wrapper>
      <HeroPage image={`${process.env.PUBLIC_URL}/krossneslaug-reddit.webp`}>
        <SocialLinks/>
        <HeroHeading>Krossneslaug</HeroHeading>
        <QuickNav/>
      </HeroPage>
      <InfoPage />
      <HistoryPage />
      <HeroPage image={`${process.env.PUBLIC_URL}/krossneslaug-sigrun.jpg`} minHeight="400px"/>
      <ShortSection>
        <ShortSectionInner>
          <p>
            Sigrún hefur staðið vaktina í sundlauginni seinustu ár.
            Hún sést hér í sundi ásamt dóttur sinni Viktoríu.
            Myndin er fengin af láni frá strandir.is og texti og mynd eru hér tímabundið á meðan gerð síðunnar stendur.
          </p>
        </ShortSectionInner>
      </ShortSection>
      <HeroPage image={`${process.env.PUBLIC_URL}/krossneslaug-teikning.jpg`} minHeight="400px" />
      <ShortSection>
        <ShortSectionInner>
          <p>
            Vorið 2021 var hafist handa við að endurbyggja Krossneslaug en húsnæðið sem hýsti búningsaðstöðu þarfnaðist algjörra endurbóta auk þess sem aðstöðu vantaði fyrir starfsfólk.
            Verkefnið hefur nú þegar kostar yfir 50 milljónir en það reyndist umfangsmeira en fyrst var talið þar sem endurbyggja þurfti húsið nánast frá grunni, auk þess sem sundlaugin sjálf þarfnaðist talsverðs viðhalds.
            Fjármunir sem safnast hafa nú þegar með áðurnefndum styrkjum og þeir fjármunir sem félagið hafði safnað síðustu áratugi fara langt með að ljúka frágangi við búnings- og starfsmannaaðstöðu en duga því miður ekki til að ljúka við útisvæðið.
            Til þess að ljúka því verkefni viljum við því leita til þín um styrk.
            Allur krónur eru þar vel þegnar og fara beint í verkið sjálft.
            Það sem felst í að ljúka útisvæðinu er;
            útsýnispottur,
            pallar og göngustígar,
            ljúka viðgerðum á sundlaug,
            öryggis- og fyrstu hjálpar búnaður,
            skjólveggir,
            stéttar.
            Áætlaður kostnaður er um 10 milljónir en án framlaga næst ekki að ljúka verkefninu. 
          </p>
        </ShortSectionInner>
      </ShortSection>
      <HeroPage image={`${process.env.PUBLIC_URL}/krossneslaug-reddit.webp`}>
        <HeroHeading>Sjáumst í sumar</HeroHeading>
      </HeroPage>
    </Wrapper>
  );
}

export default App;
