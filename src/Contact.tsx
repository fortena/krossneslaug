import React from 'react';
import styled, { css } from 'styled-components';
import { Language } from './Language';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Location } from './location.svg';
import { ReactComponent as Phone } from './phone.svg';
import { ReactComponent as At } from './at.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const InfoItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 36px;
  color: #fff;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  @media (max-width: 900px) {
    margin: 5px 0px;
    font-size: 18px;
    line-height: 1;
  }
`;

const logoStyle = css`
  height: 40px;
  width: 40px;
  cursor: pointer;
  fill: #fff;
  margin-right: 20px;
  @media (max-width: 900px) {
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
`;

const LocationLogo = styled(Location)`
  ${logoStyle}
`;

const PhoneLogo = styled(Phone)`
  ${logoStyle}
`;

const AtLogo = styled(At)`
  ${logoStyle}
`;

const map: Language = {
  IS: 'Kort',
  GB: 'Map',
  FR: 'Carte',
  DE: 'Karte',
};

{/* <a href="geo:124.028582,-29.201930" target="_blank"></a> */}
// https://goo.gl/maps/1DaQMHHduZjvZ2JQ7

const Contact = ({ language } : { language: string }) => {
  return (
    <Wrapper>
      <InfoItemWrapper>
        <Link target="_blank" href="https://maps.google.com/maps?q=66.0556012,-21.5079989"><LocationLogo />{map[language]}</Link>
      </InfoItemWrapper>
      {/* <InfoItemWrapper>
        <Link href="tel:003548885077"><PhoneLogo />+354 8885077</Link>
      </InfoItemWrapper> */}
      <InfoItemWrapper>
        <Link href="mailto:info@krossneslaug.is"><AtLogo />info@krossneslaug.is</Link>
      </InfoItemWrapper>
    </Wrapper>
  );
};

export default Contact;
