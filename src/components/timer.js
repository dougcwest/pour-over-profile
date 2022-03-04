import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [grams, setGrams] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setGrams(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        // eslint-disable-next-line no-shadow
        setSeconds((seconds) => seconds + 1);
        // eslint-disable-next-line no-shadow
        setGrams((grams) => grams + 2);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">Time: {seconds}s</div>
      <div className="time">Grams: {grams}</div>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
