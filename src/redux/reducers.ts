import { CounterAction, CounterState } from '../type';
import { INCREMENT, DECREMENT } from './actions';

const initialState: CounterState = {
  count: 0,
};

const reducer = (
  state: CounterState = initialState,
  action: CounterAction = { type: 'DEFAULT' },
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
