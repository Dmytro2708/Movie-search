import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: black;
  font-weight: 700;
  font-size: 24px;
  padding-right: 8px;
`;

export const Input = styled.input`
  font-size: 20px;
  border-radius: 10px;
  width: 600px;
  height: 50px;
  outline: none;
  border: 1px solid #ffd466;
  padding: 5px;
  margin-right: 8px;
`;

export const Button = styled.button`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
   width: 100px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #ffd466;
  color: #1e1f27;
  &:hover, &:focus {
    transform: scale(1.05);
    background-color: #EE82EE;
  }
`;