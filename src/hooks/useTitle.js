import React, { useState, useEffect, useDebugValue } from "react";

const useTitle = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useDebugValue(count);
  console.log("count", count);

  useEffect(() => {
    document.title = `Count is : ${count}`;
  });

  return [count, setCount];
};

export default useTitle;
