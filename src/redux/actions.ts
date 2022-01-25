import { CounterAction/* , DispatchType */ } from '../type';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
/*
function modifyCounter(action: CounterAction) {
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
 */
export function incrementCounter() {
  const action: CounterAction = {
    type: INCREMENT,
  };

  return action;
}

export function decrementCounter() {
  const action: CounterAction = {
    type: DECREMENT,
  };

  return action;
}
