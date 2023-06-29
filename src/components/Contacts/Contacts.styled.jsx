import styled from '@emotion/styled';

export const ListContact = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  margin-top: 40px;
`;

export const ItemContact = styled.li`
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: 0.5rem;

  border: 4px solid transparent;
  background: linear-gradient(#000000, #000000) padding-box,
    linear-gradient(
        to right,
        rgba(196, 20, 195, 1) 12%,
        rgba(0, 255, 255, 1) 33%,
        rgba(29, 11, 28, 1) 61%
      )
      border-box;

  :hover,
  :focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
    color: #a201ff;
    border: 2px solid #00ffff;
  }
`;

export const TextContact = styled.p`
  display: block;
  font-weight: 700;
`;

export const ButtonContacts = styled.button`
  display: block;
  margin: auto;
  font-size: 18px;
  font-weight: 700;

  padding: 8px 28px;
  color: #a201ff;

  border: 2px solid purple;
  border-radius: 8px;

  filter: drop-shadow(0px 0px 20px #00ffff);

  &:hover,
  &:focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
    color: #a201ff;
    border: 2px solid #00ffff;
  }
`;
