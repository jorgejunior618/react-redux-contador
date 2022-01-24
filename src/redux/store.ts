import {
  applyMiddleware, compose, createStore, Store,
} from 'redux';
import thunk from 'redux-thunk';
import { CounterAction, CounterState, DispatchType } from '../type';
import reducer from './reducers';

const composeEnhancers = typeof window === 'object'
   && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const store: Store<CounterState, CounterAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
