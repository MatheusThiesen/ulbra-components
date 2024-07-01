import { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Contador {count}
      </button>
    </div>
  );
};
