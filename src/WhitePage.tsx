import styled from 'styled-components';

const WhitePage = styled.div`
  color: #222222;
  background-color: #fff;
  text-align: left;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    padding: 10px 20px;
  }

  scroll-snap-align: start;
`;

export default WhitePage;
