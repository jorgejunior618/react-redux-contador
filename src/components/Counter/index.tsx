import React, { useState } from 'react';
import ActionButton from '../Button';
import {
  Title, Row, Text, CounterWrapper,
} from './styles';

type Props = {
  count: number,
  incrementCounter: () => void
  decrementCounter: () => void
};

function Counter({ count, incrementCounter, decrementCounter }: Props) {
  const [titulo] = useState('Contador');

  return (
    <div>
      <Title>{titulo}</Title>
      <Row>
        <ActionButton
          type="button"
          onClick={() => decrementCounter()}
        >
          <Text>-</Text>
        </ActionButton>

        <CounterWrapper>
          <Text>{count}</Text>
        </CounterWrapper>

        <ActionButton
          type="button"
          onClick={() => incrementCounter()}
        >
          <Text>+</Text>
        </ActionButton>
      </Row>
    </div>
  );
}

export default Counter;
