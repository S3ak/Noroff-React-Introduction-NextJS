import { useState, useEffect } from "react";

const LogEffect = () => {
  const [bar, setBar] = useState(0);
  const [foo, setFoo] = useState(0);

  useEffect(() => {
    // console.log("bar current state is", bar);
    console.log("foo", foo);
  }, [bar, foo]);

  return (
    <section>
      <h2>Current state is {foo}</h2>
      {/* <h2>Other state is {foo}</h2> */}
      <br />
      <button onClick={() => setFoo(foo + 1)}>click</button>
      <button onClick={() => setBar(bar + 1)}>click</button>
    </section>
  );
};

export default LogEffect;
