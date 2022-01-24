import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { CounterAction, CounterState, DispatchType } from '../type';
import reducer from './reducers';

const store: Store<CounterState, CounterAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
