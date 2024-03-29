import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactForm = styled(Form)`
  margin-bottom: 40px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 100px;
`;

export const Label = styled.label`
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  gap: 20px;
  padding: 20px;

  filter: drop-shadow(0px 0px 20px #a201ff);
`;

export const ContactInput = styled(Field)`
  display: block;

  font-size: 20px;
  font-weight: 700;
  margin: auto;
  color: #00ffff;
  background-color: transparent;
  outline: 1px solid aqua;

  filter: drop-shadow(0px 0px 20px #00ffff);

  &:hover,
  &:focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin: auto;
  font-size: 18px;
  font-weight: 700;
  color: #a201ff;

  padding: 20px 60px;

  border: 2px solid purple;
  border-radius: 8px;

  filter: drop-shadow(0px 0px 20px #00ffff);

  &:hover,
  &:focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
    color: #a201ff;
    border: 2px solid #00ffff;
  }

  animation: glow 5s ease-in-out infinite;

  @keyframes glow {
    0%,
    100% {
      color: aqua;
      text-shadow: 0 0 12px aqua, 0 0 50px aqua, 0 0 100px aqua;
    }
    10%,
    90% {
      color: #a201ff;
      text-shadow: none;
    }
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  filter: drop-shadow(0px 0px 20px red);
  color: red;
`;
