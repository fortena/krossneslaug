import React, { FC } from 'react';
import HeroPage from './HeroPage';
import DarkPage from './DarkPage';
import WhitePage from './WhitePage';
import styled from 'styled-components';
import './App.css';

const Wrapper = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;

const HeroHeading = styled.h1`
  color: #fff;
  font-size: 100px;
  font-family: 'Major Mono Display', monospace;
`;

const GoogleMapsFrame = styled.iframe`
  border: 0;
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const SpaceAroundRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SpaceBetweenRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SpaceBetweenRow50 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
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
  margin: 20px 0px;
`;

const LightHeader3 = styled.h3`
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 28px;
  font-family: "Lato", sans-serif;
  color: #000;
  margin: 20px 0px;
`;

const LightHeader4 = styled.h4`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 22px;
  font-family: "Lato", sans-serif;
  color: #000;
  margin: 10px 0px;
`;

const FacilityGuide = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  padding: 10px;
`;

const FacilityGuideRow = styled.div`
  display: flex;
`;

const FacilityGuideItem = styled.div`
  width: 100%;
`;

const FacilityGuideIcon = styled.span`
  margin: 0px 5px;
`;

const FacilityGuideText = styled.span`
  font-family: 'Noto Sans JP', sans-serif;
`;

const TelLink = styled.a`
  text-decoration: none;
  font-weight: 700;
`;

const MailLink = styled.a`
  text-decoration: none;
  font-weight: 700;
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
  return (
    <Wrapper>
      <HeroPage image={`${process.env.PUBLIC_URL}/krossneslaug-reddit.webp`}>
        <HeroHeading>Krossneslaug</HeroHeading>
      </HeroPage>
      <WhitePage>
        <SpaceAroundRow>
          <InfoColumn>
            <LightHeader3>Opnunartímar</LightHeader3>
            <SpaceBetweenRow><LightHeader4>20. Maí til 20. Ágúst</LightHeader4></SpaceBetweenRow>
            <SpaceBetweenRow><span>Opið alla daga milli 7:00 og 23:00</span></SpaceBetweenRow>
            <SpaceBetweenRow><LightHeader4>21. Ágúst til 19. Maí</LightHeader4></SpaceBetweenRow>
            <SpaceBetweenRow><span>Lokað</span></SpaceBetweenRow>
            <SpaceBetweenRow><LightHeader4>ATH!</LightHeader4></SpaceBetweenRow>
            <SpaceBetweenRow><span>Vegna framkvæmda við sundlaugina má búast tímabundnum lokunum sumarið 2022</span></SpaceBetweenRow>
            <LightHeader3>Verðskrá</LightHeader3>
            <SpaceBetweenRow50><span>Fullorðnir</span><span>1000 kr</span></SpaceBetweenRow50>
            <SpaceBetweenRow50><span>Börn</span><span>600 kr</span></SpaceBetweenRow50>
            <LightHeader3>Aðstaða</LightHeader3>
            <FacilityGuide>
              <FacilityGuideRow>
                <FacilityGuideItem>
                  <FacilityGuideIcon>🏊</FacilityGuideIcon>
                  <FacilityGuideText>12,5 metra sundlaug</FacilityGuideText>
                </FacilityGuideItem>
                <FacilityGuideItem>
                  <FacilityGuideIcon>🔥</FacilityGuideIcon>
                  <FacilityGuideText>Heitur pottur</FacilityGuideText>
                </FacilityGuideItem>
              </FacilityGuideRow>
              <FacilityGuideRow>
                <FacilityGuideItem>
                  <FacilityGuideIcon>🚿</FacilityGuideIcon>
                  <FacilityGuideText>Sturtuaðstæða og búningsklefar</FacilityGuideText>
                </FacilityGuideItem>
                <FacilityGuideItem>
                  <FacilityGuideIcon>💂</FacilityGuideIcon>
                  <FacilityGuideText>Vörður á svæðinu</FacilityGuideText>
                </FacilityGuideItem>
              </FacilityGuideRow>
              <FacilityGuideRow>
                <FacilityGuideItem>
                  <FacilityGuideIcon>🩱</FacilityGuideIcon>
                  <FacilityGuideText>Sundföt og annar varningur</FacilityGuideText>
                </FacilityGuideItem>
                <FacilityGuideItem>
                  <FacilityGuideIcon>🍦</FacilityGuideIcon>
                  <FacilityGuideText>Léttar veitingar</FacilityGuideText>
                </FacilityGuideItem>
              </FacilityGuideRow>
            </FacilityGuide>
          </InfoColumn>
          <InfoColumn>
            <GoogleMapsFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7201770001648!2d-21.50932607550783!3d66.05567638630248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f2b576e76071197%3A0xdf97a39fd5179530!2sKrossneslaug!5e0!3m2!1sen!2sno!4v1647812153745!5m2!1sen!2sno"
              width="600"
              height="450"
              allowFullScreen={false}
              loading="lazy"
            />
            <SpaceBetweenRow>Krossnes</SpaceBetweenRow>
            <SpaceBetweenRow>524 Árneshreppur</SpaceBetweenRow>
            <SpaceBetweenRow><TelLink href="tel:003541234567">+354 1234567</TelLink></SpaceBetweenRow>
            <SpaceBetweenRow><MailLink href="mailto:info@krossneslaug.is">info@krossneslaug.is</MailLink></SpaceBetweenRow>
          </InfoColumn>
        </SpaceAroundRow>
      </WhitePage>
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
