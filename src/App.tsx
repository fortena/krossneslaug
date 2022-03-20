import React, { FC } from 'react';
import HeroPage from './HeroPage';
import DarkPage from './DarkPage';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.div`
  height: 100%;
`;

const HeroHeading = styled.h1`
  color: #fff;
  font-size: 100px;
  font-family: 'Major Mono Display', monospace;
`;

const OldImage = styled.img`
  height: 500px;
`;

const CompanionText = styled.p`
  margin: 0px 50px;
  font-size: 20px;
  line-height: 1.5;
`;

const Row = styled.div`
  display: flex;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkHeader = styled.h3`
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 28px;
  font-family: "Lato", sans-serif;
  color: #fff;
  margin: 0px;
`;

const ShortSection = styled.div`
  position: relative;
`;

const ShortSectionInner =styled.div`
  color: #fff;
  background-color: #222222;
  text-align: center;
  padding: 50px 80px;
  text-align: left;
`;

const App:FC = () => {
  return (
    <Wrapper>
      <HeroPage image={`${process.env.PUBLIC_URL}/krossneslaug-reddit.webp`}>
        <HeroHeading>Krossneslaug</HeroHeading>
      </HeroPage>
      <DarkPage>
        <DarkHeader>Anno 1954</DarkHeader>
        <Row>
          <OldImage src={`${process.env.PUBLIC_URL}/framkvaemdir_vid_sundlaug_1963.jpg`} />
          <Centered>
            <CompanionText>
              Saga Krossneslaugar hefst 1954 þegar laugin var byggð í Laugarvík í landi Krossnes í Árneshreppi.
              Laugin var byggð í sjálfboðavinnu af Ungmennafélaginu Leifi Heppni og hefur rekstur og viðhald hennar haldið nær óbreytti mynd frá upphafi.
            </CompanionText>
          </Centered>
        </Row>
        <Row>
          <Centered>
            <CompanionText>
              Í áratugi var laugin opin án sundlaugarvarðar en þrifin og haldið við að mestu leiti í sjálfboðavinnu af meðlimum ungmennafélagsins og sundlaugagestum var sjálfum treyst að greiða sundgjald í bauka sem staðsettir voru í klefunum.
            </CompanionText>
          </Centered>
          <OldImage src={`${process.env.PUBLIC_URL}/sundlaug_thrifin_1962.jpg
          `} />
        </Row>
        <Row>
          <OldImage src={`${process.env.PUBLIC_URL}/sundkennsla_1958.jpg`} />
          <Centered>
            <CompanionText>
              Árið 2015(?) var ákveðið að ekki væri lengur hægt að hafa sundlaugina ómannaða og ráðnir voru sundlaugaverðir sem starfa yfir sumartímann.
              Árið 2020 hófust framkvæmdir sem enn standa yfir þar sem búningsafstaða sundlaugarinnar var endurbyggt og útisvæði sundlaugarinnar fékk yfirhalningu.
            </CompanionText>
          </Centered>
        </Row>
      </DarkPage>

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
