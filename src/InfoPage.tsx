import React, { FC } from 'react';
import WhitePage from './WhitePage';
import styled from 'styled-components';
import InfoTable from './InfoTable';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: calc(50% - 40px);
  @media (max-width: 900px) {
    margin: 5px;
    width: calc(100% - 40px);
  }
`;

const SpaceBetweenRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const SpaceBetweenRow50 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
`;

const LightHeader3 = styled.h3`
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 28px;
  color: #000;
  margin: 0px 0px 20px 0px;
  @media (max-width: 900px) {
    margin: 0px 0px 10px 0px;
    font-size: 18px;
    line-height: 1;
  }
`;

const LightHeader4 = styled.h4`
  width: 50%;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 22px;
  color: #000;
  margin: 10px 0px;
  @media (max-width: 900px) {
    margin: 5px 0px;
    font-size: 16px;
    line-height: 1;
  }
`;

const InfoText = styled.p`
  width: 50%;
  margin: 0;
  @media (max-width: 900px) {
    margin: 5px 0px;
    font-size: 12px;
    line-height: 1;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 700;
  @media (max-width: 900px) {
    margin: 5px 0px;
    font-size: 12px;
    line-height: 1;
  }
`;

const LogoLink = styled.a`
  margin: 5px 10px 0px 0px;
`;

const LogoImage = styled.img`
  height: 40px;
  width: 40px;
`;

const GoogleMapsFrame = styled.iframe`
  border: 0;
  max-width: calc(100% - 20px);
  max-height: 100%;
`;

const InfoPage:FC = () => {
  return (
    <WhitePage>
    <Wrapper>
      <InfoColumn>
        <LightHeader3>Opnunartímar</LightHeader3>
        <Row><LightHeader4>20. Maí til 20. Ágúst: </LightHeader4><InfoText>Opið alla daga milli 7:00 og 23:00</InfoText></Row>
        <SpaceBetweenRow><LightHeader4>21. Ágúst til 19. Maí: </LightHeader4><InfoText>Lokað</InfoText></SpaceBetweenRow>
        <SpaceBetweenRow><InfoText>Vegna framkvæmda við sundlaugina má búast tímabundnum lokunum sumarið 2022</InfoText></SpaceBetweenRow>
        <LightHeader3>Verðskrá</LightHeader3>
        <SpaceBetweenRow50><InfoText>Fullorðnir</InfoText><InfoText>1000 kr</InfoText></SpaceBetweenRow50>
        <SpaceBetweenRow50><InfoText>Börn</InfoText><InfoText>600 kr</InfoText></SpaceBetweenRow50>
        <LightHeader3>Aðstaða</LightHeader3>
        <InfoTable />
      </InfoColumn>
      <InfoColumn>
        <GoogleMapsFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7201770001648!2d-21.50932607550783!3d66.05567638630248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f2b576e76071197%3A0xdf97a39fd5179530!2sKrossneslaug!5e0!3m2!1sen!2sno!4v1647812153745!5m2!1sen!2sno"
          width="600"
          height="450"
          allowFullScreen={false}
          loading="lazy"
        />
          <SpaceBetweenRow><InfoText>Krossnes</InfoText></SpaceBetweenRow>
          <SpaceBetweenRow><InfoText>524 Árneshreppur</InfoText></SpaceBetweenRow>
          <SpaceBetweenRow><Link href="tel:003548885077">+354 8885077</Link></SpaceBetweenRow>
          <SpaceBetweenRow><Link href="mailto:info@krossneslaug.is">info@krossneslaug.is</Link></SpaceBetweenRow>
          <Row>
            <LogoLink target="_blank" href="https://www.facebook.com/krossneslaug" title="https://www.facebook.com/krossneslaug"><LogoImage src={`${process.env.PUBLIC_URL}/f_logo_58.png`}/></LogoLink>
            <LogoLink target="_blank" href="https://www.instagram.com/explore/tags/krossneslaug" title="#krossneslaug"><LogoImage src={`${process.env.PUBLIC_URL}/instagram.png`}/></LogoLink>
          </Row>
      </InfoColumn>
    </Wrapper>
  </WhitePage>
  );
};

export default InfoPage;
