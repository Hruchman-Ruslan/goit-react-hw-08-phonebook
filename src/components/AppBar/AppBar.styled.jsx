import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
  padding: 24px;
  max-width: 1200px;
  border-bottom: 2px solid #00ffff;
  filter: drop-shadow(0px 0px 20px #a201ff);

  @media screen and (max-width: 1025px) {
    width: 480px;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;
