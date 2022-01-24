import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 6px;
  padding: 8px 8px;
  border: none;
  background: none;
  background-color: #272735;
  color: white;
  align-items: center;
  justify-content: center;
  transition: 300ms;

  &:hover {
    background-color: #171725;
  }
`;

function ActionButtom({ onClick, children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}

export default ActionButtom;
