import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import Counter from '../components/Counter';
import { MainWrapper } from './styles';

function CounterScreen() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

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
