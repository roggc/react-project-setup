import React, { useEffect } from "react";
import { useSlice } from "./slices";

const App = () => {
  const [count, setCount] = useSlice("count");
  const [count2, dispatch] = useSlice("count2");
  const [count3, setCount3] = useSlice("count3");
  const [count4, dispatchCount4] = useSlice("count4");

  useEffect(() => {
    localStorage.setItem("count3", JSON.parse(count3));
  }, [count3]);

  useEffect(() => {
    localStorage.setItem("count4", JSON.parse(count4));
  }, [count4]);

  return (
    <>
      <div>
        {count}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <div>
        {count2}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>{" "}
      <div>
        {count3}
        <button onClick={() => setCount3((c) => c + 1)}>+</button>
      </div>
      <div>
        {count4}
        <button onClick={() => dispatchCount4({ type: "increment" })}>+</button>
      </div>
    </>
  );
};

export default App;
