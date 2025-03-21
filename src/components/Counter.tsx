import { ReactNode } from 'react';

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
}

function Counter({setCount, children}: CounterProps) {


  return (
    <div>
      <p>{children}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Increment</button>
    </div>
  );
}

export default Counter;