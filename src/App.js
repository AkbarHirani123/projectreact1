import React, { useState } from 'react';
import Hello from './sayHello';
import Tweet from './tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count +1);
    setRed(!isRed);
  };

  const [users, setUser] = useState([
    {name: 'Akbar', message: "hello there"},
    {name: 'Jon Snow', message: "I am true king"},
    {name: 'Ghost', message: "woof"}
  ]);

  return (
    <div className="app">
      {/*<h1 className={isRed ? 'red' : ''}>Change My Color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>*/}d
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;