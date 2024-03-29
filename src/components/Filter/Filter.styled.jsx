import styled from '@emotion/styled';

export const LabelFilter = styled.label`
  color: brown;
  font-weight: 900;
  font-size: 48px;
`;

export const InputFilter = styled.input`
  display: block;

  font-size: 20px;
  font-weight: 700;
  margin: auto;
  color: purple;
  background-color: transparent;
  outline: 1px solid aqua;

  margin-top: 20px;

  filter: drop-shadow(0px 0px 20px #00ffff);

  &:hover,
  &:focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
  }
`;
