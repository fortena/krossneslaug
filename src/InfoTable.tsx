import React, { FC } from 'react';
import styled from 'styled-components';

const FacilityGuide = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  padding: 10px;
`;

const FacilityGuideRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FacilityGuideItem = styled.div`
  width: 50%;
`;

const FacilityGuideIcon = styled.span`
  margin: 0px 5px;
`;

const FacilityGuideText = styled.span`
  font-family: 'Noto Sans JP', sans-serif;
  @media (max-width: 900px) {
    margin: 5px 0px;
    font-size: 12px;
    line-height: 1;
  }
`;

const InfoTable:FC = () => {
  return (
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
          <FacilityGuideText>Sturtur og klefar</FacilityGuideText>
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
  );
};

export default InfoTable;
