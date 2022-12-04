import { CounterAction, DispatchType } from '../type';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

function incrementCounterStore(): CounterAction {
  return {
    type: INCREMENT,
  };
}

function decrementCounterStore(): CounterAction {
  return {
    type: DECREMENT,
  };
}

export function incrementCounter() {
  return (dispatch: DispatchType) => {
    dispatch(incrementCounterStore());
  };
}

export function decrementCounter() {
  return (dispatch: DispatchType) => {
    dispatch(decrementCounterStore());
  };
}
