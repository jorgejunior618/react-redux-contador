import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import Counter from '../components/Counter';
import { decrementCounter, incrementCounter } from '../redux/actions';
import { CounterState } from '../type';

const ClassRoom = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassRoomControls = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

const ClassRoomBoard = styled.div`
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CounterScreen() {
  const count: number = useSelector((state: CounterState) => state.count);
  const dispatch: Dispatch<any> = useDispatch();

  const increment = React.useCallback(
    () => {
      dispatch(incrementCounter());
    },
    [dispatch],
  );

  const decrement = React.useCallback(
    () => {
      dispatch(decrementCounter());
    },
    [dispatch],
  );

  return (
    <ClassRoom>
      <ClassRoomControls>
        Tópico único ;)
      </ClassRoomControls>
      <ClassRoomBoard>
        <Counter
          count={count}
          incrementCounter={increment}
          decrementCounter={decrement}
        />
      </ClassRoomBoard>
    </ClassRoom>
  );
}

export default CounterScreen;
