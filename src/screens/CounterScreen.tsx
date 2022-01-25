import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import Counter from '../components/Counter';
import { decrementCounter, incrementCounter } from '../redux/actions';
import { CounterState } from '../type';

const ClassRoomBoard = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

function CounterScreen() {
  const count: number = useSelector((state: CounterState) => state.count);
  const dispatch: Dispatch<any> = useDispatch();
  const documentComponent = useRef(document.getElementsByTagName('body'));

  const increment = () => {
    dispatch(incrementCounter());
  };

  const decrement = () => {
    dispatch(decrementCounter());
  };

  useEffect(() => {
    documentComponent.current[0].addEventListener('keydown', (event) => {
      switch (event.key.toLowerCase()) {
        case 'arrowup':
          increment();
          break;
        case 'arrowright':
          increment();
          break;
        case '+':
          increment();
          break;
        case 'arrowleft':
          decrement();
          break;
        case 'arrowdown':
          decrement();
          break;
        case '-':
          decrement();
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <ClassRoomBoard>
      <Counter
        count={count}
        incrementCounter={increment}
        decrementCounter={decrement}
      />
    </ClassRoomBoard>
  );
}

export default CounterScreen;
