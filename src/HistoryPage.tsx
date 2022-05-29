import React, { FC } from 'react';
import styled from 'styled-components';
import DarkPage from './DarkPage';

const OldImage = styled.img`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const CompanionText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  @media (min-width: 901px) {
    margin: 20px 50px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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
  color: #fff;
  margin: 20px 0px;
`;

const HistoryPage:FC = () => {
  return (
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
  );
};

export default HistoryPage;
