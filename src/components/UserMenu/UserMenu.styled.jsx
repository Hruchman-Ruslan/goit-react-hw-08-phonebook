import styled from '@emotion/styled';

export const WrapperLogout = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtonLogOut = styled.button`
  display: block;
  margin: auto;
  font-size: 18px;
  font-weight: 700;

  padding: 8px 28px;
  color: #a201ff;

  border: 2px solid purple;
  border-radius: 8px;

  filter: drop-shadow(0px 0px 20px #00ffff);
  transition-property: color, transform;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 20px #a201ff);
    color: #a201ff;
    border: 2px solid #00ffff;
  }
`;

export const User = styled.p`
  display: block;
  text-align: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 0;
  color: #a201ff;
`;

export const UserName = styled.span`
  align-items: center;
  font-weight: 700;
  margin-bottom: 0;
  color: #95ce10;
`;
