import { CounterAction } from '../type';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function incrementCounter(): CounterAction {
  return {
    type: INCREMENT,
  };
}

export function decrementCounter(): CounterAction {
  return {
    type: DECREMENT,
  };
}
