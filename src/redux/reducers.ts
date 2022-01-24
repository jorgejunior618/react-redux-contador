import { CounterAction, CounterState } from '../type';
import { INCREMENT, DECREMENT } from './actions';

const initialState: CounterState = {
  count: 0,
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: CounterState = initialState,
  action: CounterAction,
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
