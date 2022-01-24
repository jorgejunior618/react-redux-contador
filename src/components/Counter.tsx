import React from 'react';

type Props = {
  count: number,
  incrementCounter: () => void
  decrementCounter: () => void
};

function Counter({ count, incrementCounter, decrementCounter }: Props) {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button type="button" onClick={() => decrementCounter()}>-</button>
        <span>{count}</span>
        <button type="button" onClick={() => incrementCounter()}>+</button>
      </div>
    </div>
  );
}

export default Counter;
