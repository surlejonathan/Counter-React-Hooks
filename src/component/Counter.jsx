import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(Number(count) + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const handleChange = (e) => setCount(e.target.value);
  const handleReset = () => setCount(0);

  return (
    <div>
      <h1>Compteur</h1>
      <p>Le compteur est à : {count}</p>
      <button onClick={() => decrement()}>- 1</button>{" "}
      <input
        type='number'
        min='0'
        placeholder='Saisir une valeur'
        onChange={(e) => handleChange(e)}
        value={count}
      />{" "}
      <button onClick={() => increment()}>+ 1</button>
      <br />
      <br />
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

export default Counter;
