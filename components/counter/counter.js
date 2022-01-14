import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <p>the current count is {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
    </main>
  );
};

export default Counter;
