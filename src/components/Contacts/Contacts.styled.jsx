import styled from '@emotion/styled';

export const ListContact = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  margin-top: 40px;
`;

export const ItemContact = styled.li``;

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
