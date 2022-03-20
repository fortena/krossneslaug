import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ImageBackgroundProps {
  $backgroundImage: string,
  $minHeight: string,
}

const ImageBackground = styled.div<ImageBackgroundProps>`
  position: relative;
  opacity: 0.8;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({$backgroundImage}) => $backgroundImage});

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    opacity: .1;
  }

  min-height: ${({ $minHeight }) => $minHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  min-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const HeroPage = ({
  children,
  image,
  minHeight = '100%',
} : {
  image: string,
  children?: ReactNode,
  minHeight?: string,
}) => {
  return (
    <ImageBackground $backgroundImage={image} $minHeight={minHeight}>
      <Inner>
        {children}
      </Inner>
    </ImageBackground>
  );
}

export default HeroPage;
