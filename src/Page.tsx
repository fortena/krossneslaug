import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ImageBackgroundProps {
  $backgroundImage: string,
  $minHeight: string,
}

const ImageBackground = styled.div<ImageBackgroundProps>`
  height: 100%;
  position: relative;
  opacity: 0.8;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({$backgroundImage}) => $backgroundImage});

  /* &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    opacity: .1;
  } */

  min-height: ${({ $minHeight }) => $minHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  /* scroll-snap-type: y mandatory; */
  scroll-snap-align: start;
  scroll-snap-stop: always;
  -webkit-scroll-snap-align: start;
  -webkit-scroll-snap-stop: always;
`;

const Inner = styled.div`
  min-height: 100%;
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Page = ({
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

export default Page;
