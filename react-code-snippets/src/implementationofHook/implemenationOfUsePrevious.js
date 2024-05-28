import React, { useState } from "react";
import usePrevious from "../hook/usePreviousHook";

const ImplemenationOfUsePrevious = () => {
  const [count, setCount] = useState(0);
  // get the previous value passed into the hook on the last render
  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count +1)}>Decrement</button>
    </div>
  );
};

export default ImplemenationOfUsePrevious;
