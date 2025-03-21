import './App.css'
import Heading from './componentsPropTypes/Heading';
import Section from './componentsPropTypes/Section';
import Counter from './componentsPropTypes/Counter';
import List from './componentsPropTypes/List';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Hello!</h1>
      <Heading title={"Heading"}/>
      <Section title="hello">
        <div>Hello from children section</div>
      </Section>
      <Counter setCount={setCount}>Count is  {count}</Counter>
      <List items={[1, 2, 3, 4, 5]} render={(item: number) => <span className='gold'>{item}</span>} />
    </>
  )
}

export default App
