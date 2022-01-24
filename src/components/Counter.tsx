import React from 'react';
import styled from 'styled-components';
import ActionButton from './Button';

type Props = {
  count: number,
  incrementCounter: () => void
  decrementCounter: () => void
};

const Row = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 12px;
`;

const Text = styled.span`
  margin: 0 12px;
  font-size: 24px;
  text-align: center;
`;

const CounterWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
`;

function Counter({ count, incrementCounter, decrementCounter }: Props) {
  return (
    <div>
      <Title>Counter</Title>
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
