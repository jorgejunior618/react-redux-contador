import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Counter from '../components/Counter';
import { decrementCounter, incrementCounter } from '../redux/actions';
import { CounterState } from '../type';
import { MainWrapper } from './styles';

function CounterScreen() {
  const count: number = useSelector((state: CounterState) => state.count);
  const dispatch: Dispatch<any> = useDispatch();

  const increment = () => {
    dispatch(incrementCounter());
  };

  const decrement = () => {
    dispatch(decrementCounter());
  };

  function View() {
    return (
      <MainWrapper>
        <Counter
          count={count}
          incrementCounter={increment}
          decrementCounter={decrement}
        />
      </MainWrapper>
    );
  }

  const [modificado, setModificado] = useState(true);
  const documentComponent = useRef(document.getElementsByTagName('body'));
  useEffect(() => {
    if (modificado) {
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
      setModificado(false);
    }
  }, []);

  return View();
}

export default CounterScreen;
