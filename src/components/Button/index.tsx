import React, { ButtonHTMLAttributes } from 'react';
import { Button, Text } from './styles';

function ActionButtom({ onClick, children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button onClick={onClick}>
      <Text>{children}</Text>
    </Button>
  );
}

export default ActionButtom;
