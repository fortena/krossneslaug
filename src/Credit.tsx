import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Camera } from './camera.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

const Line = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  line-height: 1.7;
  @media (max-width: 900px) {
    margin: 5px 0px;
    font-size: 14px;
    line-height: 1.3;
  }
`;

const logoStyle = css`
  height: 16px;
  width: 16px;
  fill: #fff;
  margin-right: 10px;
  @media (max-width: 900px) {
    height: 14px;
    width: 14px;
  }
`;

const CameraLogo = styled(Camera)`
  ${logoStyle}
`;

const Credit:FC = () => {
  return (
    <Wrapper>
      <CameraLogo />
      <Line>
        Davíð Már Bjarnarson
      </Line>
    </Wrapper>
  );
};

export default Credit;
