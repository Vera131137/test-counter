import React, { useState, useEffect } from 'react';

export const Counter = () => {
  // при монтировании получаем сохраненное значение counter
  const getCountValue = () => {
    const countValue = localStorage.getItem('counter');
    return countValue ? parseInt(countValue) : 0;
  };

  const [counter, setCounter] = useState(getCountValue);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  //получаем данные счетчика из localStorage
  useEffect(() => {
    const storedCounter = localStorage.getItem('counter');
    if (storedCounter) {
      setCounter(parseInt(storedCounter));
    }
  }, []);

  //сохраняем значение счетчика в localStorage при изменини счетчика
  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  return (
    <div>
      <div>Счетчик: {counter}</div>
      <div onClick={handleIncrement} style={{ backgroundColor: 'lightgray', padding: '10px', cursor: 'pointer' }}>
        + 1
      </div>
      <div onClick={handleDecrement} style={{ backgroundColor: 'lightblue', padding: '10px', cursor: 'pointer' }}>
        - 1
      </div>
    </div>
  );
};
