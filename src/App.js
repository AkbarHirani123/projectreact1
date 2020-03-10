import React from 'react';
import Hello from './sayHello';
import Tweet from './tweet';

function App() {
  return (
    <div className="app">
      <Tweet name="Akbar" message="this is a random tweet"/>
      <Tweet name="Jon Snow" message="I am the true king"/>
      <Tweet name="Winter is Comming" message="And its gone..."/>
      <Tweet name="Ghost" message="Woof"/>
    </div>
  );
}

export default App;