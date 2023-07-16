import React from 'react';
import styled from 'styled-components';
import { Language } from './Language';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  padding: 20px 20px;
  margin: 40px;
  @media (max-width: 900px) {
    margin: 10px;
  }
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  line-height: 1;
  margin: 20px 0px 0px 0px;
  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 1;
  }
`;

const Line = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #fff;
  line-height: 1.7;
  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 1.3;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

const line1: Language = {
  IS: 'Vorið 2021 var hafist handa við meiri háttar framkvæmdir á Krossneslaug en húsnæðið sem hýsti búningsaðstöðu þarfnaðist endurnýjunar auk þess sem aðstöðu vantaði fyrir starfsfólk.',
  GB: 'In the spring of 2021, work began on rebuilding facilities at Krossneslaug, but the building that housed the changing rooms needed a complete renovation, in addition to lacking facilities for the staff.',
  FR: 'Au printemps 2021, les travaux de reconstruction des installations de Krossneslaug ont commencé, mais le bâtiment qui abritait les vestiaires nécessitait une rénovation complète, en plus de manquer d\'installations pour le personnel.',
  DE: 'Im Frühjahr 2021 begannen die Arbeiten zum Umbau der Einrichtungen in Krossneslaug, doch das Gebäude, in dem sich die Umkleidekabinen befanden, musste komplett renoviert werden, außerdem fehlten Einrichtungen für das Personal.',
}

const line2: Language = {
  IS: 'Verkefnið hefur nú þegar kostað yfir 50 milljónir þar sem endurbyggja þurfti húsið nánast frá grunni auk þess sem sundlaugin sjálf þarfnaðist talsverðs viðhalds.',
  GB: 'The project has already been costly, as the building had to be rebuilt almost from the ground up, and the swimming pool itself needed considerable maintenance.',
  FR: 'Le projet a déjà été coûteux, car le bâtiment a dû être reconstruit presque à partir de zéro et la piscine elle-même a nécessité un entretien considérable.',
  DE: 'Das Projekt war bereits kostspielig, da das Gebäude fast von Grund auf neu aufgebaut werden musste und das Schwimmbad selbst erhebliche Wartungsarbeiten erforderte.',
}

const line3: Language = {
  IS: 'Þeir sem vilja styrkja áframhaldandi uppbyggingu á svæðinu er bent á reikning Ungmennafélagsins Leifs Heppna.',
  GB: 'Those who want to financially support the work can contribute to the youth association, Leifur Heppni.',
  FR: 'Ceux qui veulent soutenir financièrement le travail peuvent contribuer à l\'association des jeunes, Leifur Heppni.',
  DE: 'Wer die Arbeit finanziell unterstützen möchte, kann einen Beitrag zum Jugendverein Leifur Heppni leisten.',
}

const Donate = ({ language } : { language: string }) => {
  return (
    <Wrapper>
      <Line>{line1[language]}</Line>
      <Line>{line2[language]}</Line>
      <Line>{line3[language]}</Line>
      <Heading>Kt: 420269-5879</Heading>
      <Heading>Rn: 1161-26-000437</Heading>
    </Wrapper>
  );
};

export default Donate;
