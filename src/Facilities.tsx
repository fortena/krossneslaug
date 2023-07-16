import React from 'react';
import styled from 'styled-components';
import { Language } from './Language';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.1);
  padding: 20px;
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 36px;
  color: #fff;
  line-height: 1;
  margin: 20px 0px 10px 0px;
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 1;
  }
`;

const Line = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  line-height: 1;
  margin: 10px 0px;
  @media (max-width: 900px) {
    margin: 5px 0px;
    font-size: 18px;
    line-height: 1;
  }
`;

const open: Language = {
  IS: 'Opið 07:00 til 23:00',
  GB: 'Open 07:00 to 23:00',
  FR: 'Ouvert de 07h00 à 23h00',
  DE: 'Geöffnet von 07:00 bis 23:00 Uhr',
};

const entranceFee: Language = {
  IS: 'Verðskrá',
  GB: 'Entrance fee',
  FR: 'Frais d\'entrée',
  DE: 'Eintrittspreis',
};

const entranceAdults: Language = {
  IS: 'Fullorðnir 1000 kr',
  GB: 'Adults ISK 1000',
  FR: 'Adultes ISK 1000',
  DE: 'Erwachsene ISK 1000',
};

const entranceChildren: Language = {
  IS: 'Frítt fyrir börn',
  GB: 'Free for children',
  FR: 'Gratuit pour les enfants',
  DE: 'Kostenlos für Kinder',
};

const facilities: Language = {
  IS: 'Aðstaða',
  GB: 'Facilities',
  FR: 'Installations',
  DE: 'Einrichtungen',
};

const pool: Language = {
  IS: '12,5 metra sundlaug',
  GB: '12.5 meter swimming pool',
  FR: 'Piscine de 12,5 mètres',
  DE: '12,5-Meter-Schwimmbecken',
};

const hotTub: Language = {
  IS: 'Heitur pottur',
  GB: 'Hot tub',
  FR: 'Jacuzzi',
  DE: 'Whirlpool',
};

const showers: Language = {
  IS: 'Sturtur og klefar',
  GB: 'Showers and changing rooms',
  FR: 'Douches et vestiaires',
  DE: 'Duschen und Umkleideräume',
};

const guard: Language = {
  IS: 'Vörður á svæðinu',
  GB: 'Staffed',
  FR: 'Personnel',
  DE: 'Besetzt',
}

const Facilities = ({ language } : { language: string }) => {
  return (
    <Wrapper>
      <Heading>{open[language]}</Heading>
      <Heading>{entranceFee[language]}</Heading>
      <Line>{entranceAdults[language]}</Line>
      <Line>{entranceChildren[language]}</Line>
      <Heading>{facilities[language]}</Heading>
      <Line>{pool[language]}</Line>
      <Line>{hotTub[language]}</Line>
      <Line>{showers[language]}</Line>
      <Line>{guard[language]}</Line>
    </Wrapper>
  );
};

export default Facilities;
