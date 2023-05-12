import { useState } from "react";

function NewCounter() {
  const [number, setNumber] = useState(0);
  const fixedNumber = 0;
  const onClick = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <h1>New Counter</h1>
      <h1>{number}</h1>
      <h2>바뀌지 않는 값 : {fixedNumber}</h2>
      <button onClick={onClick}>+1</button>
    </div>
  );
}

export default NewCounter;
