import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
    </div>
  );
};
