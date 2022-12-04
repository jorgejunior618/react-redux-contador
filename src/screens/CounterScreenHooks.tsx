import React, { useState, useCallback } from 'react';
import Counter from '../components/Counter';
import { MainWrapper } from './styles';

function CounterScreen() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <MainWrapper>
      <Counter
        count={count}
        incrementCounter={increment}
        decrementCounter={decrement}
      />
    </MainWrapper>
  );
}

export default CounterScreen;
