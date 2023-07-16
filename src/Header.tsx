import React from 'react';
import styled, { css } from 'styled-components';
import ReactFlagsSelect from "react-flags-select";
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Facebook } from './facebook.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const logoStyle = css`
  height: 50px;
  width: 50px;
  cursor: pointer;
  fill: #fff;
  @media (max-width: 900px) {
    height: 30px;
    width: 30px;
  }
`;

const FacebookLogo = styled(Facebook)`
  ${logoStyle}
`;

const InstagramLogo = styled(Instagram)`
  ${logoStyle}
  height: 54px;
  width: 54px;
`;

const Header = ({ language, setLanguage } : { language: string, setLanguage: Function }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <ReactFlagsSelect
          countries={['IS', 'GB', 'FR', 'DE']}
          showSelectedLabel={false}
          showOptionLabel={false}
          selected={language}
          onSelect={(code) => {
            localStorage.setItem('language', code);
            setLanguage(code)
          }}
        />
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/krossneslaug" title="https://www.facebook.com/krossneslaug" >
          <FacebookLogo />
        </a>
        <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/explore/tags/krossneslaug" title="#krossneslaug">
          <InstagramLogo />
        </a>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
