import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
//import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <ClickCounter name={'joydip'} />
      <br />
      <br />
      <HoverCounter data={100} />
    </div>
  );
}

export default App;
